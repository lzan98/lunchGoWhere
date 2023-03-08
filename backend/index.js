const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database")

//middleware
app.use(express.json());
app.use(cors());

//ROUTES//
//input a choice
app.post("/choices", async (req,res) => {
    try {
        const input = req.body;
        const newChoice = await pool.query("INSERT INTO lunchChoices (session_id, choice) VALUES($1, $2) RETURNING *", [input.session_id, input.choice]);

        res.json(newChoice.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
}
)

//get all options
// app.get("/choices", async(req, res) => {
//     try {
//         const session_id = req.params.session_id;
//         const allChoices = await pool.query("SELECT * FROM lunchChoices");

//         res.json(allChoices.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// })

//get all sessionIds
app.get("/sessionIds", async(req, res) => {
    try {
        const sessionIds = await pool.query("SELECT DISTINCT session_id FROM lunchChoices");
        res.json(sessionIds.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get all choices from a session
app.get("/choices/:session_id", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const allChoices = await pool.query("SELECT * FROM lunchChoices WHERE session_id = $1", [session_id]);

        res.json(allChoices.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/random/:session_id", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const choice = await pool.query("SELECT * FROM lunchChoices WHERE session_id = $1 ORDER BY random() LIMIT 1", [session_id]);
        res.json(choice.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(4000, () => console.log("Up & RUnning *4000"));