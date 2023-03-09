import "./InputList.css";
import Card from "./UI/Card";

const InputList = (props) => {
    return (
        <div className="inputList">
            <Card>
                <h1>Current choices</h1>
                <button onClick={props.updateListHandler}>Refresh List</button>
                <ul>
                    {props.choices.map((choice) => (
                        <li className="inputList__item" key = {choice.id}>
                        <h2>{choice.choice}</h2>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
}

export default InputList;