import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import LearnMore from "./pages/LearnMore";
import Guide from "./pages/Guide";
import Marketplace from "./pages/Marketplace";
import Impact from "./pages/Impact";
import DonationCenter from "./pages/DonationCentre";
import SellProduct from "./pages/SellProduct";
import Scanner from "./pages/Scanner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate" element={<DonationCenter />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sellproduct" element={<SellProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </Router>
  );
}

export default App;
