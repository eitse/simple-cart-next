import React from "react";
import Header from "../src/components/Header";
import { dummyProducts } from "../src/components/dummyData";
import Link from "next/link";
import 'tailwindcss/tailwind.css';

const Products = () => {
  return (
    <main>
      <div className="bg-white min-h-screen">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {dummyProducts.map((product) => (
            <div className="product-card text-center rounded-lg p-4 border border-gray-200" key={product.id}>
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-w-1 aspect-h-1 overflow-hidden mb-2">
                  <img
                    src={product.image.source_url}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-lg">${product.price}</p>
                <p className="text-red-500 mt-2 cursor-pointer">View Details</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
