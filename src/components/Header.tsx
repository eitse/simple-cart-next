import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  // Retrieve cart items from localStorage when running on the client side
  if (typeof window !== "undefined") {
    const cartData = localStorage.getItem("cart");
    const cart = cartData ? JSON.parse(cartData) : []; // Provide a default value of an empty array
    return (
      <div className="bg-gray-100 mt-2 w-full flex justify-between items-center shadow-md px-4 py-2">
        <NavBar cartItemCount={cart.length} />{" "}
        {/* Pass cart item count to NavBar */}
      </div>
    );
  }
  return (
    <div className="bg-gray-100 mt-2 w-full flex justify-between items-center shadow-md px-4 py-2">
      <NavBar cartItemCount={0} />{" "}
      {/* Pass a default value when localStorage is not available */}
    </div>
  );
};

export default Header;
