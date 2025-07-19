import './button.css'

function Button(props) {
    return (
        <>
            <button type='button' className={props.btnClass} >{props.title}</button>
        </>
    )
}

export default Button