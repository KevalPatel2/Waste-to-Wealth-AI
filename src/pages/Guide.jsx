import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase Authentication
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/Navbar";

const upcyclingData = [
  {
    category: "Food Waste",
    description: "Turn food scraps into compost, natural cleaners, and more!",
    examples: [
      {
        title: "Composting",
        details:
          "Convert vegetable scraps into nutrient-rich compost for gardening.",
        video: "Q5s4n9r-JGU",
      },
      {
        title: "Citrus Peel Cleaner",
        details:
          "Use citrus peels soaked in vinegar to create an all-natural household cleaner.",
        video: "toOs7nOpF-0",
      },
      {
        title: "Banana Peel Fertilizer",
        details:
          "Blend banana peels with water to create a natural plant fertilizer.",
        video: "npPwumDmW-M",
      },
    ],
  },
  {
    category: "Plastic Waste",
    description:
      "Repurpose plastic bottles, containers, and bags into reusable items.",
    examples: [
      {
        title: "Plastic Bottle Planters",
        details: "Cut plastic bottles in half and use them as pots for plants.",
        video: "IOb0R7tObD0",
      },
      {
        title: "Eco-bricks",
        details:
          "Fill plastic bottles with clean, dry plastic waste to create building blocks for construction.",
        video: "m2BVnvSrrCw",
      },
      {
        title: "Reusable Storage Containers",
        details:
          "Turn plastic containers into storage boxes for kitchen or office use.",
        video: "mihOG-Z2zNU",
      },
    ],
  },
  {
    category: "Paper & Cardboard",
    description:
      "Convert old newspapers and cardboard into eco-friendly products.",
    examples: [
      {
        title: "Handmade Paper",
        details: "Recycle newspapers into handmade paper for crafts.",
        video: "7d0Cl2aBh-0",
      },
      {
        title: "DIY Seed Pots",
        details:
          "Use cardboard egg cartons to start seedlings for your garden.",
        video: "KvKhwyEcrHc",
      },
      {
        title: "Paper Briquettes",
        details: "Compress shredded paper into bricks for fuel in fireplaces.",
        video: "VSAdnLWrmik",
      },
    ],
  },
  {
    category: "Fashion & Clothes",
    description:
      "Turn old clothes into trendy fashion items or household accessories.",
    examples: [
      {
        title: "Turn Jeans into a Tote Bag",
        details:
          "Repurpose old denim jeans into a trendy and durable tote bag.",
        video: "ox5KGVTU5H0",
      },
      {
        title: "Upcycle Old Sweaters into Mittens",
        details: "Convert worn-out sweaters into warm winter mittens.",
        video: "FIa7JWEY8vM",
      },
    ],
  },
];

const Guide = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // Redirect to login if not authenticated
      } else {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null; // Prevents flickering before redirection
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold">Upcycle Your Waste at Home</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover easy **DIY projects** to transform waste into useful
          products, reducing waste and promoting sustainability!
        </p>
      </div>

      {/* Category Selection */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center">
          Select a Waste Category
        </h2>
        <div className="grid md:grid-cols-2 justify-center gap-6 mt-10">
          {upcyclingData.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`p-6 rounded-lg shadow-md text-center transition w-full 
                ${
                  selectedCategory?.category === category.category
                    ? "bg-black text-white"
                    : "bg-white text-black hover:shadow-lg"
                }`}
            >
              <h3 className="text-xl font-bold">{category.category}</h3>
              <p className="mt-2">{category.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Details Section */}
      {selectedCategory && (
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-center">
            {selectedCategory.category} Upcycling Ideas
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            {selectedCategory.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {selectedCategory.examples.map((example, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold">{example.title}</h3>
                <p className="text-gray-600 mt-2">{example.details}</p>
                <div className="mt-4">
                  <iframe
                    className="w-full h-70 rounded-md shadow-md"
                    src={`https://www.youtube.com/embed/${example.video}`}
                    title={example.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold">Join the Upcycling Movement</h2>
        <p className="mt-4 text-lg text-gray-600">
          Every little effort counts! Start upcycling your household waste today
          and make a positive impact on the environment.
        </p>
        <div className="mt-6">
          <Link to="/marketplace">
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Explore Upcycled Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guide;
