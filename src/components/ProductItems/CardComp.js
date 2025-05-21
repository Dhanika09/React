import React from 'react';
import Image from '../Image/ImageComp.js'
import "./Card.css"
const Card = ({ item, onAdd, onDecrement }) => {
  return (
    
    <div className="card">
      <Image src={item.image} width ={286} height ={180}/>
      <p className="title">{item.title}</p>
      <p className='descript'>Description : {item.description}</p>
      <p>Price: ${item.price}</p>
      <div className = 'button'>
      <button className = "cardbutton" onClick={() => onAdd(item)}>Add to Cart</button>
      <button className = "cardbutton" onClick={() => onDecrement(item)}>Remove from Cart</button>
      </div>
    </div>
    
  );
};

export default Card;