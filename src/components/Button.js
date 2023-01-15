import "./Button.scss"

export default function Button({callback, text, id}){
    return(
        <button className="button" onClick={callback} id={id}>{text}</button>
    )
}