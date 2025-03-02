import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/Navbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";
const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Donation Center Component
const DonationCenter = () => {
  const [user, setUser] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [centers, setCenters] = useState([]);
  const navigate = useNavigate();

  // Authentication Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);
        getUserLocation();
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Get User Location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setUserLocation(location);
          fetchDonationCenters(location.latitude, location.longitude);
        },
        (error) => console.error("Error fetching location:", error),
        { enableHighAccuracy: true }
      );
    }
  };

  // Fetch Nearby Donation Centers (Using OpenStreetMap API)
  const fetchDonationCenters = async (lat, lon) => {
    const query = "Value Village";
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=10&addressdetails=1&extratags=1&bounded=1&viewbox=${
      lon - 0.1
    },${lat - 0.1},${lon + 0.1},${lat + 0.1}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        const centers = data.map((place) => ({
          id: place.place_id,
          name: place.display_name,
          address: place.display_name,
          latitude: parseFloat(place.lat),
          longitude: parseFloat(place.lon),
        }));
        setCenters(centers);
      }
    } catch (error) {
      console.error("Error fetching donation centers:", error);
    }
  };

  if (!user) {
    return null; // Prevent flickering
  }

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
            Find Nearby Donation Centers
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Locate centers that accept upcycled products near you.
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full max-w-4xl h-96 mb-6">
          {userLocation && (
            <MapContainer
              center={[userLocation.latitude, userLocation.longitude]}
              zoom={13}
              className="h-full w-full rounded-lg shadow-md"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {/* User Location Marker */}
              <Marker
                position={[userLocation.latitude, userLocation.longitude]}
                icon={DefaultIcon}
              >
                <Popup>You are here</Popup>
              </Marker>

              {/* Donation Centers Markers */}
              {centers.map((center) => (
                <Marker
                  key={center.id}
                  position={[center.latitude, center.longitude]}
                  icon={DefaultIcon}
                >
                  <Popup>{center.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>

        {/* List of Nearby Centers */}
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Nearby Donation Centers</h2>
          {userLocation ? (
            centers.length > 0 ? (
              centers.map((center) => (
                <div
                  key={center.id}
                  className="p-4 bg-gray-100 rounded-lg my-2"
                >
                  <h3 className="text-lg font-semibold">{center.name}</h3>
                  <p className="text-gray-600">{center.address}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No donation centers found nearby.</p>
            )
          ) : (
            <p className="text-gray-600">Fetching location...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationCenter;
