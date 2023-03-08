const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database")

//middleware
app.use(express.json());
app.use(cors());

//ROUTES//
//input an option (from a session)
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

//get all options from a session
app.get("/choices/:session_id", async(req, res) => {
    try {
        const session_id = req.params.session_id;
        const allChoices = await pool.query("SELECT * FROM lunchChoices WHERE session_id = $1", [session_id]);

        res.json(allChoices.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//delete(?)




app.listen(4000, () => console.log("Up & RUnning *4000"));