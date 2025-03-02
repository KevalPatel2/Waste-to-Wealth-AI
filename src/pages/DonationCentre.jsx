import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/Navbar";

const DonationCenter = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
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
    return null;
  }

  const donationCategories = [
    {
      title: "Food Donation",
      description:
        "Restaurants and households can list surplus food for shelters and food banks.",
      icon: "🍽️",
    },
    {
      title: "Clothing Donation",
      description:
        "Connect with charities and upcycling centers that need textile materials.",
      icon: "👕",
    },
    {
      title: "Plastic Collection",
      description:
        "Submit collection requests for verified recyclers and upcycling centers.",
      icon: "🔄",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {/* Hero Section */}
        <div className="container mx-auto text-center mb-8">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
            🎁 Donation & Redistribution Hub
          </span>
          <h1 className="text-5xl font-bold mt-4">
            Donate Your Upcycled Products
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Connect with organizations that can use your upcycled products to
            make a difference.
          </p>
        </div>

        {/* Donation Categories */}
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">How You Can Donate</h2>
          <p className="text-gray-600">Choose a donation category below:</p>

          <div className="mt-6 space-y-4">
            {donationCategories.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg flex items-center"
              >
                <span className="text-2xl mr-4">{category.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md w-full">
            Find Donation Centers
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCenter;
