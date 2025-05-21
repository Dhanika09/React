import React from "react";
import "../Input/Input.css"
const InputComp = (props) => {
    return(
        <input className ={props.name} type={props.text} placeholder={props.placeholder}></input>
    )
}

export default InputComp;