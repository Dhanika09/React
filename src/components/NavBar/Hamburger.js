import React from "react";
import Image from "../Image/ImageComp";
import "../NavBar/Hamburger.css"
import HamburgerImg from "../asserts/25391.png";
import DropdownArrow from "../asserts/caret-down.png";


function Hamburger() {
    return (
        <>
            <button className="Hamburger">
                <Image name="hamburger" src={HamburgerImg}/>
                 All Categories
                <Image name="dropdown-arrow" src={DropdownArrow}/>
            </button>
        </>
    );
}

export default Hamburger;