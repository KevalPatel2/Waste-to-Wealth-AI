import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import Navbar from "../components/Navbar";

const Impact = () => {
  const [user, setUser] = useState(null);
  const [ecoCredits, setEcoCredits] = useState(0);
  const [ecoLevel, setEcoLevel] = useState(1);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [weeklyTasks, setWeeklyTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);
        await fetchUserData(user.uid);
        await fetchWeeklyTasks(user.uid);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Fetch user eco-level, credits, and tasks completed count from Firestore
  const fetchUserData = async (userId) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      setEcoLevel(userSnap.data().ecoLevel || 1);
      setEcoCredits(userSnap.data().ecoCredits || 0);
      setTasksCompleted(userSnap.data().tasksCompleted || 0);
    } else {
      await setDoc(userRef, { ecoLevel: 1, ecoCredits: 0, tasksCompleted: 0 });
      setEcoLevel(1);
      setEcoCredits(0);
      setTasksCompleted(0);
    }
  };

  // Fetch weekly tasks from Firestore
  const fetchWeeklyTasks = async (userId) => {
    const tasksRef = collection(db, "users", userId, "tasks");
    const tasksSnap = await getDocs(tasksRef);

    if (!tasksSnap.empty) {
      const tasks = tasksSnap.docs.map((taskDoc) => ({
        id: taskDoc.id,
        ...taskDoc.data(),
      }));

      setWeeklyTasks(tasks);
    } else {
      console.log("No tasks found, generating new ones...");
      await generateWeeklyTasks(userId);
    }
  };

  // Generate new weekly tasks in Firestore if none exist
  const generateWeeklyTasks = async (userId) => {
    const tasks = [
      {
        name: "Green Bin Hero 🌱",
        description: "Compost an organic item.",
        points: 50,
        completed: false,
      },
      {
        name: "DIY Upcycling 📦",
        description: "Upcycle a household item.",
        points: 75,
        completed: false,
      },
      {
        name: "Trash Tag Challenge 🗑",
        description: "Pick up 5 pieces of litter.",
        points: 100,
        completed: false,
      },
      {
        name: "Plastic-Free Day 🚫",
        description: "Avoid single-use plastics for a day.",
        points: 50,
        completed: false,
      },
      {
        name: "E-Waste Hunter 🔋",
        description: "Recycle an old battery or device.",
        points: 100,
        completed: false,
      },
    ];

    const tasksRef = collection(db, "users", userId, "tasks");
    for (const task of tasks) {
      await setDoc(doc(tasksRef), task);
    }

    setWeeklyTasks(tasks);
  };

  // Complete a task and update Firestore
  const completeTask = async (taskId, points) => {
    if (!user) return;

    const taskRef = doc(db, "users", user.uid, "tasks", taskId);
    await updateDoc(taskRef, {
      completed: true,
    });

    const newCredits = ecoCredits + points;
    const newTasksCompleted = tasksCompleted + 1;

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      ecoCredits: newCredits,
      tasksCompleted: newTasksCompleted,
    });

    setEcoCredits(newCredits);
    setEcoLevel(newLevel);
    setTasksCompleted(newTasksCompleted);
    setWeeklyTasks(
      weeklyTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  // Define badges
  const badges = [
    { id: 1, name: "Beginner", image: "/badges/badges1.jpg", levelRequired: 1 },
    {
      id: 2,
      name: "Intermediate",
      image: "/badges/badges2.jpg",
      levelRequired: 2,
    },
    { id: 3, name: "Advanced", image: "/badges/badges3.jpg", levelRequired: 3 },
    { id: 4, name: "Expert", image: "/badges/badges4.jpg", levelRequired: 4 },
  ];

  if (!user) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 flex flex-col justify-center items-center p-6">
        {/* Gamification & Eco-Rewards Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl">
          <h2 className="text-2xl font-bold">Eco-Rewards</h2>
          <p className="text-gray-600">
            Earn badges, climb leaderboards, and receive eco-credits for your
            contributions.
          </p>

          {/* Grid Layout for Badges & Eco-Credits */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Achievement Badges Section */}
            <div>
              <h3 className="text-lg font-bold">Achievement Badges</h3>
              <div className="flex justify-start gap-4 mt-4">
                {badges.map((badge) => (
                  <div key={badge.id} className="text-center">
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className={`w-24 h-24 ${
                        ecoLevel < badge.levelRequired
                          ? "opacity-50 grayscale"
                          : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Eco-Credits Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold">Eco-Credits System</h3>
              <p className="text-gray-600 text-sm">
                Redeem your eco-credits for discounts on sustainable products.
              </p>
              <p className="text-3xl font-bold mt-2">{ecoCredits}</p>
              <Link to="/marketplace">
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
                  Redeem
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Weekly Challenges Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl mt-6">
          <h2 className="text-2xl font-bold">Your Weekly Challenges</h2>
          <div className="mt-6 space-y-3">
            {weeklyTasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 rounded-md shadow-sm flex justify-between items-center ${
                  task.completed ? "bg-gray-300" : "bg-white"
                }`}
              >
                <div>
                  <h3 className="text-md font-semibold">{task.name}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-green-600 text-sm">
                    +{task.points} Eco-Credits
                  </p>
                </div>

                {task.pendingApproval ? (
                  <p className="text-sm text-yellow-600">⏳ Pending Approval</p>
                ) : task.completed ? (
                  <p className="text-sm text-gray-700">✅ Completed</p>
                ) : (
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange(task.id, e.target.files[0])
                      }
                      className="text-sm"
                    />
                    <button
                      onClick={() => submitProof(task.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
                    >
                      Submit Proof
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
