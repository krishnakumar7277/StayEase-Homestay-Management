import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import HomestayDetails from "../pages/HomestayDetails";
import AITripPlanner from "../pages/AITripPlanner";
import ComponentDemo from "../pages/ComponentDemo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homestay-details" element={<HomestayDetails />} />
        <Route path="/ai-trip-planner" element={<AITripPlanner />} />
        <Route path="/components" element={<ComponentDemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;