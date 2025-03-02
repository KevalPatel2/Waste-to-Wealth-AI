import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase Auth
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // Redirect if not authenticated
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null; // Prevent flickering before redirection
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold">Welcome to Your Dashboard</h1>
        <p className="mt-4 text-lg text-gray-600">
          Track your impact and manage your waste-to-wealth activities.
        </p>
      </div>

      {/* Environmental Impact Metrics */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold">
            Waste Diverted from Landfills
          </h3>
          <p className="text-4xl font-bold mt-2">24,568 kg</p>
          <p className="text-green-600 text-sm">+20.1% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold">CO₂ Emissions Prevented</h3>
          <p className="text-4xl font-bold mt-2">12,345 kg</p>
          <p className="text-green-600 text-sm">+15.3% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold">Active Community Members</h3>
          <p className="text-4xl font-bold mt-2">5,280</p>
          <p className="text-green-600 text-sm">+32.5% from last month</p>
        </div>
      </div>

      {/* Link to Impact Page */}
      <div className="container mx-auto px-6 py-10 text-center">
        <Link to="/impact">
          <button className="bg-black text-white px-6 py-3 rounded-md">
            View Gamification & Eco-Rewards
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
