import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase"; // Import Firebase Authentication
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white text-black shadow-md">
      <h1 className="text-xl font-bold flex items-center space-x-2">
        <Link to="/dashboard">♻️ Waste-to-Wealth</Link>
      </h1>
      <div className="md:flex space-x-6">
        <Link to="/scanner" className="text-gray-600 hover:text-black">
          Classify Waste
        </Link>
        <Link to="/guide" className="text-gray-600 hover:text-black">
          Upcycling guide
        </Link>
        <Link to="/marketplace" className="text-gray-600 hover:text-black">
          Marketplace
        </Link>
        <Link to="/donate" className="text-gray-600 hover:text-black">
          Donate now
        </Link>
        <Link to="/impact" className="text-gray-600 hover:text-black">
          Eco-Rewards
        </Link>
      </div>
      <div className="space-x-4 flex">
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-white text-black hover:text-blue-500 px-4 py-2 rounded-md">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Get Started
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
