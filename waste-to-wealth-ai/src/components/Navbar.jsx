import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-xl font-bold flex items-center space-x-2">
        ♻️ Waste-to-Wealth
      </h1>
      <div className="hidden md:flex space-x-6">
        <Link to="/scanner" className="text-gray-600 hover:text-black">
          Waste Classification
        </Link>
        <Link to="/guide" className="text-gray-600 hover:text-black">
          Upcycling Guide
        </Link>
        <Link to="/marketplace" className="text-gray-600 hover:text-black">
          Marketplace
        </Link>
      </div>
      <div className="space-x-4 flex">
        <Link to="/login">
          <button className="bg-white text-Black hover:text-blue-500 px-4 py-2 rounded-md">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
