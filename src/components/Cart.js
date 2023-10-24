import React from 'react';
import Link from 'next/link';

const Cart = ({ items, onRemoveItem, onPurchase }) => {
  return (
    <div className="bg-white flex min-h-screen flex-col items-center">
      <h2>Your Cart</h2>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.orderId} className="mb-8">
            <p>
              Product ID: {item.orderId} - {item.name} - ${item.price}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => onRemoveItem(item.orderId)}
            >
              Remove from Cart
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {items.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Total Price: ${items.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
        </div>
      )}
      <Link href="/Purchase">
        <p className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Purchase
        </p>
      </Link>
    </div>
  );
};

export default Cart;
