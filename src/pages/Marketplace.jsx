import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar";

const Marketplace = () => {
  const [user, setUser] = useState(null);
  const [marketItems, setMarketItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // Redirect if not authenticated
      } else {
        setUser(user);
        fetchMarketplaceItems();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Fetch upcycled products from Firebase
  const fetchMarketplaceItems = async () => {
    const marketRef = collection(db, "marketplace");
    const marketSnap = await getDocs(marketRef);

    if (!marketSnap.empty) {
      const items = marketSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMarketItems(items);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {/* Hero Section */}
        <div className="container mx-auto text-center mb-8">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
            🔄 Circular Economy Marketplace
          </span>
          <h1 className="text-5xl font-bold mt-4">
            Buy & Sell Upcycled Products
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore sustainable products created through waste-to-wealth
            initiatives.
          </p>
        </div>

        {/* Marketplace Products */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 className="text-2xl font-bold col-span-full">
            Upcycled Products
          </h2>
          {marketItems.length > 0 ? (
            marketItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="w-full h-40 bg-gray-300 flex justify-center items-center rounded-md">
                  <span className="text-gray-600">📷 Image Placeholder</span>
                </div>
                <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-lg font-bold mt-2">${item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full">
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
