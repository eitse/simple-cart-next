import React, { useEffect, useState } from 'react';
import Cart from '../src/components/Cart';
import Header from '../src/components/Header';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Function to generate a unique order ID
  const generateOrderId = (productId) => {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substr(2, 10); // Generate a random string
    return `${randomId}_${timestamp}`;
  };

  // Retrieve cart items from localStorage when running on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartWithOrderIds = storedCart.map((item) => ({
        ...item,
        orderId: generateOrderId(item.id),
      }));
      setCart(cartWithOrderIds);
    }
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (orderId) => {
    const updatedCart = cart.filter((item) => item.orderId !== orderId);
    setCart(updatedCart);

    // Update localStorage when an item is removed
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold my-4">Your Cart</h1>
        <div className="bg-white p-4 rounded shadow-md">
          <Cart items={cart} onRemoveItem={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
