import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./ChoiceGenerator.css"
import Card from "./UI/Card";

const ChoiceGenerator = () => {

    const params = useParams();

    const [generatedChoice, setGeneratedChoice] = useState('');
    const [generatedChoices, setGeneratedChoices] = useState([]);

    const generateRandomChoice = async () => {
        try {
            const response = await fetch (`http://localhost:4000/random/${params.sessionId}`);
            const data = await response.json();
            setGeneratedChoice(data);
        } catch (err) {
            console.error(err.message);
        }

        try {
            const body = {choice: generatedChoice.choice};
            await fetch (`http://localhost:4000/${params.sessionId}/update`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            getHistory();
        } catch (err) {
            console.error(err.message);
        }
    }

    const getHistory = async () => {
        try {
            const response = await fetch (`http://localhost:4000/${params.sessionId}/getHistory`);
            const data = await response.json();
            setGeneratedChoices(data);
            console.log(data);
        } catch (err) {
            console.error(err.message);
        }

    }

    useEffect(() => {
        getHistory();
    }, [generatedChoices]);


    return (
        <div className="choiceGenerator">
            <Card>
                <h1>Today's lunch shall be:</h1>
                <button className="choiceGenerator__button" onClick={generateRandomChoice}> Generate a choice!</button>
                <h1>{generatedChoice.choice}</h1>
                </Card>

                <Card>

                <h2> History </h2>
                <ul>
                    {generatedChoices.map((choice) => (
                        <li style={{margin: "0", padding: "0"}} key = {choice.id}>
                        {choice.choice}
                        </li>))}
                </ul>

                </Card>
        </div>
    )
}

export default ChoiceGenerator;