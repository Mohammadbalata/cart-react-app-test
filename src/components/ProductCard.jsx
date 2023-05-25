import React from 'react';
import { useProductContext } from '../contexts/productContext';

const ProductCard = ({product}) => {
    const { state: {products}, addToCart,removeFromCart } = useProductContext();

    const isExistingTnCart = () => products.find(item => item.id === product.id)
    const toggleCart = () => {
      isExistingTnCart() ?  removeFromCart(product.id) :addToCart(product) 
    }
  return (
    <div>
      <ul style={{listStyleType:"none"}}>
          <li style={{border:"2px solid black",margin:"20px",padding:"10px"}}>
            <h3> name : {product.name} </h3>
            <p> description: {product.description} </p>
            <span style={{color:"red"}}> price : {product.price}</span>
            <br />
            <br />
            <button
            className={isExistingTnCart()? "remove" : ""}
              style={{
                borderRadius:"30px",
                width:"70px",
                height:"30px",
                fontSize:"12px"
              }}
            onClick={toggleCart} >{isExistingTnCart()? "Remove From Cart" : "Add To Cart"}</button>
          </li>
     </ul>
    </div>
  );
}

export default ProductCard;
