import {useState} from "react";

const PlayerInput =(props)=>{
    const [userName, setUserName] = useState("");

    const handleChange = (event) =>{
        setUserName(event.target.value);
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        props.onSubmit(props.id,userName);
    }

    return(
        <form className='column' onSubmit={handleSubmit}>
            <label className="header" htmlFor="userName">
                {props.label}
            </label>
            <input
                type="text"
                id='userName'
                placeholder='Github User'
                value={userName}
                autoComplete='off'
                onChange={handleChange}
            />
            <button
                type='submit'
                className='button'
                disabled={!userName}
            >
                Submit
            </button>
        </form>
    )
}
export default PlayerInput;