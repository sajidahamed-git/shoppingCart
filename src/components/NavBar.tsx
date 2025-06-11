import { Link } from "react-router-dom";

interface NavBarProps {
  cartCount: number;
}

export default function NavBar({ cartCount }: NavBarProps) {
  return (
    <nav className="flex justify-end items-center gap-8 px-6 py-4 bg-white shadow-md border-b border-gray-200">
      <Link to="/" className="text-blue-700 font-semibold hover:underline">
        Home
      </Link>
      <Link to="/shop" className="text-blue-700 font-semibold hover:underline">
        Shop
      </Link>
      <Link to="/cart">
        <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold shadow">
          Cart: {cartCount}
        </button>
      </Link>
    </nav>
  );
}
