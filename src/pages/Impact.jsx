import { useState } from "react";
import Navbar from "../components/Navbar";

const Impact = () => {
  const [ecoCredits, setEcoCredits] = useState(1250);

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 text-center">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
            📊 Environmental Impact
          </span>
          <h1 className="text-5xl font-bold mt-4">
            Making a Difference Together
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Track your environmental impact and earn rewards for your
            contributions.
          </p>
        </div>

        {/* Impact Metrics */}
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

        {/* Gamification & Eco-Rewards */}
        <div className="container mx-auto px-6 py-10 mt-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Gamification & Eco-Rewards</h2>
            <p className="text-gray-600 mt-2">
              Earn badges, climb leaderboards, and receive eco-credits for your
              contributions.
            </p>

            {/* Achievement Badges */}
            <h3 className="text-lg font-semibold mt-6">Achievement Badges</h3>
            <div className="flex justify-center gap-6 mt-4">
              <div className="text-center">
                <div className="bg-gray-200 p-4 rounded-full w-16 h-16 mx-auto"></div>
                <p className="text-sm mt-2 font-medium">Beginner</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-300 p-4 rounded-full w-16 h-16 mx-auto"></div>
                <p className="text-sm mt-2 font-medium">Intermediate</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-400 p-4 rounded-full w-16 h-16 mx-auto"></div>
                <p className="text-sm mt-2 font-medium">Advanced</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-500 p-4 rounded-full w-16 h-16 mx-auto"></div>
                <p className="text-sm mt-2 font-medium">Expert</p>
              </div>
            </div>

            {/* Eco-Credits Section */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Eco-Credits System</h3>
                <p className="text-gray-600 text-sm">
                  Redeem your eco-credits for discounts on sustainable products
                  and services.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center mt-4 md:mt-0">
                <h3 className="text-lg font-semibold">Your Eco-Credits</h3>
                <p className="text-3xl font-bold mt-2">{ecoCredits}</p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
                  View Rewards
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
