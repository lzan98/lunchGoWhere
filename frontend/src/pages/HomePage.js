import { useState } from "react";
import Card from "../components/UI/Card"
import "./HomePage.css"
import { json, Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const [sessionId, setSessionId] = useState('');
    const navigate = useNavigate();

    const sessionIdChangeHandler = (event) => {
        setSessionId(event.target.value);
    }

    const navigateHandler = async () => {
        const newSessionId = String.fromCharCode(97+Math.floor(Math.random() * 26)) + Math.random().toString(36).substring(2,7);
        // add session into sessions
        const body = {date: Date.now() / 1000};
        try {
            const response = await fetch(`http://localhost:4000/create/${newSessionId}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
        // create table for session
        navigate(newSessionId);
    }

    const getSessionIds = async() => {
            try {
                const response = await fetch('http://localhost:4000/sessionIds');
                const jsonData = await response.json();
                const sessionIds = jsonData.map((obj) => obj.session_id);
                return sessionIds;
            } catch (err) {
                console.error(err.message);
            }
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        // verify sessionId
        const sessionIds = await getSessionIds();
        console.log(sessionIds);
        if (sessionIds.includes(sessionId)) {
            navigate(sessionId);
        } else {
            //do nothing
        }
    }

    return ( 
    <div style={{display:"inline-block"}}>
        <h1>Lunch Go Where?</h1>
        <form className="homeForm" onSubmit={submitHandler}>
            <input className="homeInput" type="text" name="sessionId" placeholder="Lunch Session Key"
            value={sessionId} onChange={sessionIdChangeHandler}></input>
            <button className="homeButton" type="submit">Enter</button>
        </form>
    <button className="homeNewSessionButton" onClick={navigateHandler}>New Session</button>
    </div>
    );
}

export default HomePage;