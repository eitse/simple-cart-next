import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { dummyProducts } from "../components/dummyData";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <div className="bg-white min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Featured Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummyProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border shadow-sm rounded-md p-4"
              >
                {/* Wrap the Image in a Link */}
                <Link href={`/products/${product.id}`}>
                  <div>
                    <div className="relative w-full h-60">
                      <img
                        src={product.image.source_url}
                        alt={product.name}
                        className="object-contain w-full h-full"
                        // layout="fill"
                      />

                      {/* <Image
                        src={product.image.source_url}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                      /> */}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mt-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: ${product.price.toFixed(2)}
                    </p>
                    <p className="text-red-500 mt-2 block hover:underline">
                      View Details
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
