import React from "react";
import "../Banner/HeroBanner.css"
import Banner from '../asserts/Banner.png';
import Image from "../Image/ImageComp";

const HeroBannerComp = (props) => {
    return(
        <div>
            <Image name={props.name} src={Banner} width={`100%`} height={450}/>
            <span className={props.header}>GET THE NEW PHONE SAMSUNG GALAXY </span>
            <p className={props.content}>A transformative triple camera system adds tons of capability without complexity</p>
        </div>
    )
}

export default HeroBannerComp;