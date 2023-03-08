import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InputForm from "../components/InputForm";

const SessionPage = () => {

    const params = useParams();

    const [choices, setChoices] = useState([]);
    const [generatedChoice, setGeneratedChoice] = useState('');

    const saveInputHandler = async (enteredText) => {
        //post
        try {
            const body = {session_id: params.sessionId,
            choice: enteredText};
            const response = await fetch("http://localhost:4000/choices", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            getChoices();
        } catch (err) {
            console.error(err.message);
        }

    }

    const generateRandomChoice = async () => {
        try {
            const response = await fetch (`http://localhost:4000/random/${params.sessionId}`);
            const data = await response.json();
            console.log(data);
            setGeneratedChoice(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getChoices = async () => {
        try {
            const response = await fetch (`http://localhost:4000/choices/${params.sessionId}`);
            const data = await response.json();
            setChoices(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getChoices();
    }, [])

    return (
    <div>
      <h1>Current choices</h1>
      <button onClick={getChoices}>Refresh List</button>
     <ul>
        {choices.map((choice) => (
            <li key = {choice.id}>
            {<h1>{choice.choice}</h1>}
            </li>
        ))}
     </ul>
     <InputForm onInput={saveInputHandler}/>

     <button onClick={generateRandomChoice}> Generate a choice!</button>
     <h1>{generatedChoice.choice}</h1>

    </div>
    );
}

export default SessionPage;