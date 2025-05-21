import React from "react";
import "../Image/ImageComp.css"
const Image = (props) => {
    const { src, width, height, name } = props;
    return(
           <img className={name} src = {src} width={width} height={height} alt={props}/>
        )
}

export default Image;