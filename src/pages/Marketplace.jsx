import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Marketplace = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "marketplace"));
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchProducts();
  }, []);

  if (!user) return null;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto text-center mb-8">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
            🛒 Circular Economy Marketplace
          </span>
          <h1 className="text-5xl font-bold mt-4">
            Buy & Sell Upcycled Products
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            List and discover sustainable products made from waste.
          </p>
        </div>

        {/* Sell Product Button */}
        <div className="text-center mb-6">
          <Link to="/sellproduct">
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Sell a Product
            </button>
          </Link>
        </div>

        {/* Display Products */}
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-semibold mt-2">
                  {product.price ? Number(product.price).toFixed(2) : "N/A"}{" "}
                  Eco-Points
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products listed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
