import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputForm from "../components/InputForm";
import InputList from "../components/InputList";
import ChoiceGenerator from "../components/ChoiceGenerator";
import "./SessionPage.css";
import LunchDate from "../components/LunchDate";

const SessionPage = () => {
    const params = useParams();

    localStorage.setItem('session', params.sessionId);

    const [choices, setChoices] = useState([]);
    const [date, setDate] = useState();

    const saveInputHandler = async (enteredText) => {
        //post
        try {
            const currSessionId = params.sessionId;
            const body = {choice: enteredText};
            const response = await fetch(`http://localhost:4000/${currSessionId}/create`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            getChoices();
        } catch (err) {
            console.error(err.message);
        }

    }

    const getChoices = async () => {
        try {
            const response = await fetch (`http://localhost:4000/${params.sessionId}/choices`);
            const data = await response.json();
            setChoices(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getDate = async () => {
        try {
            const response = await fetch (`http://localhost:4000/${params.sessionId}/date`);
            const data = await response.json();
            setDate(data.session_date);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getChoices();
    }, [])

    useEffect(() => {
        getDate();
    }, [])

    const url = window.location.href;

    return (
    <>
    <LunchDate date={date}/>
    <button onClick={() => {navigator.clipboard.writeText(url)}}>Copy Session Link</button>
        <div className="sessionPage">
            <InputList choices={choices} updateListHandler={getChoices}/>
            <InputForm onInput={saveInputHandler}/>
            <ChoiceGenerator/>
        </div>
    </>
    );
}

export default SessionPage;