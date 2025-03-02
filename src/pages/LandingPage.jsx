import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CameraIcon,
  LightBulbIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto mb-1 px-6 pt-20 pb-10 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="text-sm px-3 py-1 bg-black text-white rounded-full">
            Sustainable Innovation
          </span>
          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Transform Waste into <br />
            <span className="text-gray-700">Valuable Products</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Our AI-powered platform helps you classify, process, and
            redistribute waste into high-value secondary products.
          </p>
          <div className="mt-6 space-x-4">
            <Link to="/learnmore">
              <button className="bg-black text-white px-6 py-3 rounded-md flex items-center space-x-2 mb-2">
                <span>Learn More</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="dashboard_1.jpg"
            alt="Waste-to-Wealth AI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto mt-2 px-6 pb-10 pt-5">
        <h2 className="text-3xl font-bold text-center">Explore Our Features</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-3">
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

export default LandingPage;
