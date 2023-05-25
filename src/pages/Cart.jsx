import React from "react";
import { useProductContext } from "../contexts/productContext";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { state } = useProductContext();

  return (
    <div>
      {!state.products.length && "No Products in The Cart"}
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {state?.products?.map((product) => (
          <ProductCard key={product.id} {...{ product }} />
        ))}
      </div>
      <p>count : {state.count}</p>
      <p>
        total price : {state.products.reduce((acc, cur) => acc + cur.price, 0)}
      </p>
    </div>
  );
};

export default Cart;
