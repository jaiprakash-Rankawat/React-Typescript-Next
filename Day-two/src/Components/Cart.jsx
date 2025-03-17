import React from "react";

const Cart = () => {
  const product = ["Mobile", "Camera", "Headphone"];
  return (
    <div>
      {product.length > 0 && (
        <h1>You have {product.length} items in your cart</h1>
      )}
      {product.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
};

export default Cart;
