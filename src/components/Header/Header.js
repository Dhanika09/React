import React from "react";
import './Header.css'
import myImage from "../asserts/download.jpg";
import Icon1 from '../asserts/3916579.png'
import Icon2 from '../asserts/3917688.png'
import Icon3 from '../asserts/3916598.png'
import Image from "../Image/ImageComp";
import Input from "../Input/InputComp";
import Icon from "../Icon/IconComp";

function Header () {
    return(
        <>
            <Image name ="logo" src ={myImage}/>
            <Input name ="input" placeholder = "Search here for Product,Brands & Categories" type = "text"/>
            <Image name ="icons" src={Icon1}/>
            <Image name ="icons" src={Icon2}/>
            <Icon  name ="icons" src={Icon3} />
        </>
    )
}

export default Header;