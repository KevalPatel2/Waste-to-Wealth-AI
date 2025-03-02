import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-bold flex items-center space-x-2">
          ♻️ Waste-to-Wealth
        </h1>
        <Link to="/" className="text-gray-600 hover:text-black">
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold">Learn More About Waste-to-Wealth</h1>
        <p className="mt-4 text-lg text-gray-600">
          Transforming waste into valuable resources through AI-powered
          classification and circular economy solutions.
        </p>
      </div>

      {/* About Section */}
      <div className="container mx-auto mb-10">
        <h2 className="text-3xl font-bold text-center">
          What is Waste-to-Wealth?
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-left">
          Waste-to-Wealth AI is an innovative platform designed to transform
          waste into valuable resources using artificial intelligence and
          sustainable technologies. By leveraging AI-powered waste
          classification, upcycling methods, and a circular economy marketplace,
          we enable individuals, businesses, and policymakers to reduce waste,
          lower environmental impact, and create economic opportunities from
          materials that would otherwise be discarded. The platform automates
          waste recognition, provides DIY upcycling guides, and connects users
          to an eco-friendly marketplace where upcycled products can be bought
          and sold. Waste-to-Wealth AI directly contributes to{" "}
          <span className="font-bold">
            United Nations Sustainable Development Goal (SDG) 12 – Responsible
            Consumption and Production, by promoting sustainable waste
            management, reducing resource exploitation, and fostering a
            zero-waste economy
          </span>
          . Our goal is to close the loop on waste management, making
          sustainability both practical and profitable for everyone.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto mb-10">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">
              AI-Powered Waste Classification
            </h3>
            <p className="text-gray-600 mt-2">
              Our AI model detects and categorizes waste, guiding users on the
              best upcycling or disposal methods.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">
              DIY Household Waste Upcycling Guide
            </h3>
            <p className="text-gray-600 mt-2">
              Learn step-by-step ways to repurpose waste into useful products,
              reducing landfill waste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Circular Economy Marketplace</h3>
            <p className="text-gray-600 mt-2">
              Buy and sell upcycled products, supporting a sustainable and
              eco-friendly economy.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Why It Matters</h2>
        <p className="mt-4 text-lg text-gray-700 text-left">
          The world generates over{" "}
          <span className="font-bold">2 billion tons</span> of waste annually,
          with millions of tons ending up in landfills and oceans, causing
          severe environmental and economic damage. Food waste alone accounts
          for nearly 10% of global greenhouse gas emissions, while plastic
          pollution is reaching catastrophic levels. Traditional waste
          management methods are inefficient, costly, and unsustainable, leading
          to an urgent need for innovative solutions. Waste-to-Wealth AI is
          addressing this global challenge by turning waste into opportunity in
          alignment with{" "}
          <span className="font-bold">
            SDG 12 – Responsible Consumption and Production
          </span>
          . Our platform integrates AI-driven waste classification, upcycling
          strategies, and a sustainable marketplace, creating a circular economy
          where materials are reused, repurposed, and reintegrated into the
          supply chain instead of being discarded. This reduces carbon
          emissions, minimizes landfill waste, and promotes responsible
          consumption, empowering individuals, businesses, and policymakers to
          make environmentally conscious decisions. By encouraging waste
          reduction, sustainable upcycling, and eco-friendly trade,
          Waste-to-Wealth AI helps build a greener, more resource-efficient
          future. Waste is not just trash—it’s an untapped resource with the
          potential to drive economic growth, social impact, and environmental
          sustainability. With Waste-to-Wealth AI, we are turning sustainability
          into action, ensuring a cleaner, more responsible world for future
          generations.
        </p>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold">Join the Movement</h2>
        <p className="mt-4 text-lg text-gray-600">
          Ready to take action? Start classifying waste, upcycling materials,
          and trading on our marketplace today.
        </p>
        <div className="mt-6 space-x-4">
          <Link to="/signup">
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Get Started
            </button>
          </Link>
          <Link to="/marketplace">
            <button className="bg-gray-200 px-6 py-3 rounded-md">
              Explore Marketplace
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
