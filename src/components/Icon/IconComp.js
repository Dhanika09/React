import React from 'react';
import "../Icon/IconComp.css"
import { useCart } from '../CartContext';
import Badge from './Badge';

const Icon = (props) => {
  const { cart } = useCart();
  const { src, width, height, name } = props;

  return (
    <div className="cart-icon">
      <img className={name} src = {src} width={width} height={height} alt={props}/>
      <Badge count={cart.length} />
    </div>
  ); 
};

export default Icon;



