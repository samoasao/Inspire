import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function CartItem({ cart, removeItem }) {
  console.log(cart);
  if (cart.length < 1) {
    return <h4>No items</h4>;
  }

  return (
    <>
      {cart &&
        cart.map((item) => (
          <article key={uuidv4()} className="cartItem-container">
            <img src={item.image} alt="pic" />
            <section className="cartItem-description">
              <p style={{ fontSize: 20, margin: 2, fontWeight: "bold" }}>
                {item.productName}
              </p>
              <button
                style={{
                  background: "transparent",
                  color: "rgb(233, 233, 233)",
                  cursor: "pointer",
                }}
                onClick={() => removeItem(item)}
              >
                <i className="material-icons">delete</i>
              </button>
            </section>
          </article>
        ))}
    </>
  );
}

export default CartItem;
