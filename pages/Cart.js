import React from "react";
import Header from "../src/components/Header";
import 'tailwindcss/tailwind.css';

const Cart = ({ items, onRemoveItem, onPurchase }) => {
  return (
    <div className="bg-white flex min-h-screen flex-col items-center">
      <Header />
      <h2>Your Cart</h2>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - {item.price}$
            </p>
            <button onClick={() => onRemoveItem(item.id)}>Remove from Cart</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={onPurchase}>Purchase</button>
    </div>
  );
};

export default Cart;