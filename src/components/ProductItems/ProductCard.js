import React, { useEffect, useState } from 'react';
import Card from './CardComp';
import { useCart } from '../CartContext';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart } = useCart();

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Card
          key={product.id}
          item={product}
          title={product.title}
          onAdd={() => addToCart(product)}
          onDecrement={() => removeFromCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductCard;
