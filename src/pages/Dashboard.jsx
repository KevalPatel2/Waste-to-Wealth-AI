import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    ecoCredits: 0,
    wasteReduced: 0,
    tasksCompleted: 0,
    ecoRank: "Beginner",
  });
  const navigate = useNavigate();

  // Fetch user stats from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setStats(userSnap.data());
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) return null;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold">
            Welcome, {user.displayName || "Eco Hero"}! 🌍
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Your sustainability journey at a glance.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 p-6">
          {/* Eco Credits */}
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">🌿 Eco Credits</h2>
            <p className="text-4xl font-semibold">{stats.ecoCredits}</p>
          </div>

          {/* Waste Reduced */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">♻ Waste Reduced</h2>
            <p className="text-4xl font-semibold">{stats.wasteReduced} kg</p>
          </div>

          {/* Tasks Completed */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">🎯 Tasks Completed</h2>
            <p className="text-4xl font-semibold">{stats.tasksCompleted}</p>
          </div>

          {/* Eco Rank */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">🏆 Eco Rank</h2>
            <p className="text-4xl font-semibold">{stats.ecoRank}</p>
          </div>

          {/* Waste Classification */}
          <Link
            to="/scanner"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-bold">🗑️ Waste Classification</h2>
            <p className="text-gray-600 mt-2 text-center">
              Scan and classify your waste.
            </p>
          </Link>

          {/* Upcycling Guide */}
          <Link
            to="/guide"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-bold">🔄 Upcycling Guide</h2>
            <p className="text-gray-600 mt-2 text-center">
              Learn how to upcycle household waste.
            </p>
          </Link>

          {/* Marketplace */}
          <Link
            to="/marketplace"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-bold">🛒 Marketplace</h2>
            <p className="text-gray-600 mt-2 text-center">
              Buy & sell upcycled products.
            </p>
          </Link>

          {/* Donation Center */}
          <Link
            to="/donate"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-bold">🎁 Donation Centers</h2>
            <p className="text-gray-600 mt-2 text-center">
              Find places to donate reusable items.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
