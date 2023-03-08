import { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const [sessionId, setSessionId] = useState('');
    const navigate = useNavigate();

    const sessionIdChangeHandler = (event) => {
        setSessionId(event.target.value);
    }

    const navigateHandler = () => {
        const newSessionId = Math.random().toString(36).substring(2,8);
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
    <div>
    <h1> My Home Page </h1>
    <form onSubmit={submitHandler}>
        <input type="text" name="sessionId"
        value={sessionId} onChange={sessionIdChangeHandler}></input>
        <button type="submit">Enter</button>
    </form>
    <button onClick={navigateHandler}>New Session</button>
    </div>
    );
}

export default HomePage;