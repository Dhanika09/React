import React from "react";
import HeroBannerComp from "../Banner/HeroBannerComp";
import Button from "../Button/ButtonComp";
import ProductCard from "../ProductItems/ProductCard"

const Home = () => {
    return(
        <>
        <HeroBannerComp name="image-container" header = "header" content="content"/>
        <Button name="short-button" child = "Buy Now"></Button>
        <Button name="long-button" child = "WIN $599  with trade-in"></Button>
        <div className="product">
        <h1 className="h1">Our Products</h1>
        <ProductCard/>
     </div>
        </>
    )
}

export default Home;