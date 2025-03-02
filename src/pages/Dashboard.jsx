import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

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
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 relative">
        {/* User Stats Section */}
        <div className="container mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold">
            Welcome, {user.displayName || "Eco Hero"}! 🌍
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Your sustainability journey at a glance.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
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
    </div>
  );
};

export default Dashboard;
