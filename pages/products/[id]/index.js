import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../../src/components/Header';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import { dummyProducts } from '../../../src/components/dummyData';

// Define the generateOrderId function to create a unique order ID
const generateOrderId = (productId) => {
  const timestamp = Date.now(); // Get the current timestamp
  return `${productId}_${timestamp}`;
};

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [orderCount, setOrderCount] = useState(0);
  const [availableStock, setAvailableStock] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const productData = dummyProducts.find((p) => p.id.toString() === id);
      if (productData) {
        setProduct(productData);
        setAvailableStock(productData.maxOrderCount);
        if (productData.maxOrderCount <= 1) {
          setIsAvailable(false);
        }
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    if (isAvailable && availableStock > 0) {
      // Add the product to the cart in local storage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const newItem = {
        ...product,
        orderId: generateOrderId(product.id),
      };
      cart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(cart));

      setOrderCount(orderCount + 1);
      setAvailableStock(availableStock - 1);

      if (availableStock === 1) {
        setIsAvailable(false);
      }
    }
  };

  const handleBuyNow = () => {
    // Implement your buy now logic here (e.g., redirect to CartPage)
    router.push('/CartPage');
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Header />
      <div className="my-4 text-center">
        <Image src={product.image.source_url} alt={product.name} width={400} height={200}
                     />
        <h2 className="text-3xl font-semibold my-2">{product.name}</h2>
        <p className="text-lg">{product.description}</p>
        <p className="text-2xl my-2">Price: {product.price}$</p>
        <p className="text-lg my-2">Previous Orders: {orderCount}</p>
        <p className="text-lg my-2">Available Stock: {availableStock}</p>
        {isAvailable ? (
          <div className="my-4">
            <button
              onClick={handleAddToCart}
              disabled={availableStock === 0}
              className="bg-green-500 text-white rounded-lg px-4 py-2 mr-4"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Buy Now
            </button>
          </div>
        ) : (
          <div className="my-4">
            <p className="text-red-500 text-xl mb-2">This item is no longer available.</p>
            <button
              onClick={handleBuyNow}
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
