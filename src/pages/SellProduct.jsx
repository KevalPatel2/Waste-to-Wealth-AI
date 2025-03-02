import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SellProduct = () => {
  const [user, setUser] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

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

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "marketplace"), {
        ...newProduct,
        price: parseFloat(newProduct.price) || 0,
        userId: user.uid,
        timestamp: serverTimestamp(),
      });

      alert("Product added!");
      navigate("/marketplace");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (!user) return null;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Sell a Product
          </h2>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <input
              type="text"
              placeholder="Product Name"
              className="w-full p-3 border rounded-lg"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Price ($)"
              className="w-full p-3 border rounded-lg"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Description"
              className="w-full p-3 border rounded-lg"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-3 border rounded-lg"
              value={newProduct.imageUrl}
              onChange={(e) =>
                setNewProduct({ ...newProduct, imageUrl: e.target.value })
              }
              required
            />
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Add Product
            </button>
          </form>
          <div className="text-center mt-4">
            <button
              onClick={() => navigate("/marketplace")}
              className="text-gray-600 hover:underline"
            >
              Back to Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
