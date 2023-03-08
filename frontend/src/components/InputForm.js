import { useState } from "react"

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
     <form onSubmit={submitHandler}>
        <input type="text" value={enteredText} onChange={textChangeHandler}/>
        <button type="submit">Submit!</button>
     </form>   
    )
}

export default InputForm;