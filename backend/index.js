const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database")

//middleware
app.use(express.json());
app.use(cors());

//ROUTES//
//input a choice from a session
app.post("/:session_id/choices", async (req,res) => {
    try {
        const input = req.body;
        const sessionId = req.params.session_id;
        const newChoice = await pool.query("INSERT INTO " + sessionId + " (choice) VALUES ($1) RETURNING *", [input.choice]);

        res.json(newChoice.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
}
)

// get date of session id
app.get("/:session_id/date", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const dateTime = await pool.query("SELECT session_date FROM sessions WHERE session_id = $1", [session_id]);
        res.json(dateTime.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// create new session
app.post("/create/:new_session_id", async(req, res) => {
    try {
        const {date} = req.body;
        await pool.query("INSERT INTO sessions (session_id, session_date) VALUES ($1, to_timestamp($2))", [req.params.new_session_id, date]);

        newSessionId = req.params.new_session_id;
        await pool.query("CREATE TABLE " + newSessionId + " (id SERIAL PRIMARY KEY, choice VARCHAR(255))");
        res.json();
    } catch (err) {
        console.error(err.message);
    }
})

//get all sessionIds
app.get("/sessionIds", async(req, res) => {
    try {
        const sessionIds = await pool.query("SELECT DISTINCT session_id FROM sessions");
        res.json(sessionIds.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get all choices from a session
app.get("/choices/:session_id", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const allChoices = await pool.query("SELECT * FROM " + session_id);

        res.json(allChoices.rows);
    } catch (err) {
        console.error(err.message);
    }
})


// get a random choice from session
app.get("/random/:session_id", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const choice = await pool.query("SELECT * FROM " + session_id + " ORDER BY random() LIMIT 1");
        res.json(choice.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update randomly generated choice into table
app.post("/:session_id/update", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const {choice} = req.body;
        await pool.query("INSERT INTO HISTORY (session_id, choice) VALUES ($1, $2)", [session_id, choice] );
    } catch (err) {
        console.error(err.message);
    }
})

// get all previously generated choices from a session
app.get("/:session_id/getHistory", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const choice = await pool.query("SELECT * FROM HISTORY WHERE session_id = $1 ORDER BY id DESC", [session_id]);
        res.json(choice.rows);
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(4000, () => console.log("Up & RUnning *4000"));