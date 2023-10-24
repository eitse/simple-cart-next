import Link from "next/link";

interface NavBarProps {
  cartItemCount: number; // Specify the type as number
}

const NavBar: React.FC<NavBarProps> = ({ cartItemCount }) => {
  return (
    <nav className="p-2 flex items-center justify-between text-blue-600">
      {/* Styled text logo for "AnatixShop" */}
      <div className="text-lg font-bold flex items-center space-x-4">
        <span className="text-blue-600 text-xl">AnatixShop</span>
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="py-1 px-2 rounded-lg bg-gray-100 focus:outline-none"
        />
        <button className="bg-blue-500 text-white rounded-lg px-3 py-1 hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Navigation links with space between */}
      <div className="flex items-center ml-96 space-x-4">
        <Link href="/">
          <div className="hover:text-blue-500 text-lg font-bold">Home</div>
        </Link>
        <Link href="/Products">
          <div className="hover:text-blue-500 text-lg font-bold">Product</div>
        </Link>
        <Link href="/CartPage">
          <div
            className={`text-lg font-bold ${
              cartItemCount === 0
                ? "text-gray-400 cursor-not-allowed"
                : "hover:text-blue-500"
            }`}
          >
            Cart ({cartItemCount})
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
