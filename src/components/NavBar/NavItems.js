import React from "react";
import "../NavBar/NavItems.css"
import { Link } from "react-router-dom";

const NavItems = (props) => {
    return (
        <>
            <ul className="nav-items">
                <li className={props.name}><Link className="items" to="/">Home</Link></li>
                <li className={props.name}><Link className="items" to="NewArrivals">New Arrivals</Link></li>
                <li className={props.name}><Link className="items" to="/Trending">Trending</Link></li>
                <li className={props.name}><Link className="items" to="/Deals">Deals For You</Link></li>
                <li className={props.name}><Link className="items" to="/Discounts">Discounts</Link></li>
                <li className={props.name}><Link className="items" to="/Offers">Weekly Offers</Link></li>
                <li className={props.name}><Link className="items" to="/Vendor">Become A Vendor</Link></li>
            </ul>          
        </>
    )
}


export default NavItems;