import { useState } from "react"
import "./InputForm.css"

const InputForm = (props) => {

    const [enteredText, setEnteredText] = useState('');
    
    const textChangeHandler = (event) => {
        setEnteredText(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onInput(enteredText);
        setEnteredText('');
    }

    return (
        <div className="inputFormDiv">
            <h1>Lunch Go Where?</h1>
            <form className="inputForm" onSubmit={submitHandler}>
            <input className="input" type="text" value={enteredText} onChange={textChangeHandler}/>
            <button className="submitButton" type="submit">Submit!</button>
     </form>   

        </div>
    )
}

export default InputForm;