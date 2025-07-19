import './input.css'

function Input(props) {
    return (
        <div className='input'>  
            <label htmlFor={props.inputID}>{props.inputName}</label>
            <input type={props.inputType} placeholder={props.placeHolder} id={props.inputID}/>
        </div>
    )
}

export default Input