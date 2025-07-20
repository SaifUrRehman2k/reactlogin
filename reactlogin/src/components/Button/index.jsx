import './button.css'

function Button(props) {
    return (
        <>
            <button type='button' className={props.btnClass} onClick={props.btnFucntiion}>{props.title}</button>
        </>
    )
}

export default Button