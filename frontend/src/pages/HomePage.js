import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    const submitHandler = (event) => {
        event.preventDefault();
        navigate(sessionId);
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