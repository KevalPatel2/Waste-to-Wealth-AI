import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  ArrowRightIcon,
  CameraIcon,
  LightBulbIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Define ecoLevel mapping
const ECO_LEVEL_MAP = {
  0: "Beginner",
  1: "Intermediate",
  2: "Advanced",
  3: "Expert",
};

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    ecoCredits: 0,
    tasksCompleted: 0,
    ecoLevel: 0, // Default to Beginner
    wasteReduced: 0, // Add wasteReduced in state
  });

  const navigate = useNavigate();

  // Fetch user stats from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);

        // Fetch User-Specific Data
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setStats((prevStats) => ({
            ...prevStats,
            ...userSnap.data(),
          }));
        }

        // Fetch Global Metrics Data
        const metricsRef = doc(db, "metrics", "globalstats");
        const metricsSnap = await getDoc(metricsRef);
        if (metricsSnap.exists()) {
          setStats((prevStats) => ({
            ...prevStats,
            wasteReduced: metricsSnap.data().wasteReduced || 0,
          }));
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* User Stats Section */}
      <div className="container mx-auto text-center mt-10 px-6">
        <h1 className="text-4xl font-bold">
          Welcome, {user.displayName || "Eco Hero"}! 🌍
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Your sustainability journey at a glance.
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-6 px-6">
          {/* Eco Credits */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">🌿 Eco Credits</h2>
            <p className="text-3xl font-semibold">{stats.ecoCredits}</p>
          </div>

          {/* Waste Reduced */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">♻ Waste Reduced</h2>
            <p className="text-3xl font-semibold">{stats.wasteReduced} kg</p>
          </div>

          {/* Tasks Completed */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">🎯 Tasks Completed</h2>
            <p className="text-3xl font-semibold">{stats.tasksCompleted}</p>
          </div>

          {/* Eco Level (Rank) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">🏆 Eco Rank</h2>
            <p className="text-3xl font-semibold">
              {ECO_LEVEL_MAP[stats.ecoLevel] || "Beginner"}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto mt-10 px-6 pb-10">
        <h2 className="text-3xl font-bold text-center">Explore Our Features</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 px-6">
          {/* AI Waste Classification */}
          <Link
            to="/scanner"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <CameraIcon className="w-12 h-12 text-green-600" />
            <h3 className="text-xl font-bold mt-4">AI Waste Classification</h3>
            <p className="text-gray-600 mt-2">
              Use image recognition to classify food waste and find the best
              recycling method.
            </p>
          </Link>

          {/* Upcycling Guide */}
          <Link
            to="/guide"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <LightBulbIcon className="w-12 h-12 text-blue-600" />
            <h3 className="text-xl font-bold mt-4">DIY Upcycling Guide</h3>
            <p className="text-gray-600 mt-2">
              Learn how to transform household waste into valuable products with
              step-by-step guides.
            </p>
          </Link>

          {/* Marketplace */}
          <Link
            to="/marketplace"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <ShoppingBagIcon className="w-12 h-12 text-yellow-600" />
            <h3 className="text-xl font-bold mt-4">
              Circular Economy Marketplace
            </h3>
            <p className="text-gray-600 mt-2">
              Trade and purchase upcycled products in our waste-to-wealth
              marketplace.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
