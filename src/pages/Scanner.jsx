import { useState } from "react";
import Navbar from "../components/Navbar";

const Scanner = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction.");
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error("Error predicting waste:", error);
      alert("Error processing image.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-10 px-4">
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          Interactive Demo
        </span>
        <h1 className="text-4xl font-bold text-center mt-3">
          Try Our AI Waste Classification
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Upload an image of your waste and our AI will suggest the best way to
          upcycle it.
        </p>

        {/* Upload Box */}
        <div className="mt-6 w-full max-w-2xl bg-white shadow-md rounded-lg p-6 text-center border border-dashed border-green-400">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-green-400 p-6 rounded-lg hover:bg-green-50 transition"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-48 h-48 object-cover rounded-md"
              />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12m0 0l3-3m-3 3l-3-3m3 3V4m0 16a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
                <p className="mt-2 text-gray-600 font-medium">
                  Upload Waste Image
                </p>
                <p className="text-gray-400 text-sm">
                  Drag and drop or click to upload an image
                </p>
              </>
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 transition"
        >
          {loading ? "Processing..." : "Classify Waste"}
        </button>

        {/* Prediction Result */}
        {prediction && (
          <div className="bg-white p-6 rounded-lg shadow-md mt-6 max-w-lg text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Prediction Result
            </h2>
            <p className="mt-2 text-gray-700">
              <strong>Waste Category:</strong> {prediction.prediction}
            </p>
            <p className="text-gray-600">
              <strong>Confidence:</strong>{" "}
              {(prediction.confidence * 100).toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
