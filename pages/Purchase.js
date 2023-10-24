import React, { useState } from 'react';
import Header from '../src/components/Header';
import { useRouter } from 'next/router';

const Purchase = () => {
  const [isPurchased, setIsPurchased] = useState(false);
  const router = useRouter();

  const handlePurchase = () => {
    // In a real application, you would integrate with a payment gateway here.
    // For simplicity, we'll just set a flag to indicate a successful purchase.
    setIsPurchased(true);
    // You can also clear the local storage here if payment is successful.
    // localStorage.removeItem('cart');
  };

  const handleCancel = () => {
    // Clear the cart from local storage and reset the purchase state.
    localStorage.removeItem('cart');
    setIsPurchased(false);
    // Redirect back to the home page.
    router.push('/');
  };

  return (
    <div className="bg-white flex flex-col min-h-screen items-center">
      <Header />

      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Checkout</h2>
      </div>

      <div className="p-8">
        {isPurchased ? (
          <div>
            <p className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</p>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Cancel Purchase
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xl mb-4">Complete your purchase:</p>
            <button
              onClick={handlePurchase}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
