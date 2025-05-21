import React from "react";
import "../Button/Button.css"
const ButtonComp = (props) => {
    return (
        <>
            <button className = {props.name}>{props.child}</button>          
        </>
    )
}
export default ButtonComp;