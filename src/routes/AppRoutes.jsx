import MyWishlist from "../pages/MyWishlist";
import MyBookings from "../pages/MyBookings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import HomestayDetails from "../pages/HomestayDetails";
import AITripPlanner from "../pages/AITripPlanner";
import ComponentDemo from "../pages/ComponentDemo";
import Profile from "../pages/Profile";
import AddHomestay from "../pages/AddHomestay";
import HostDashboard from "../pages/HostDashboard";
import EditHomestay from "../pages/EditHomestay";
import AdminDashboard from "../pages/AdminDashboard";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ai-trip-planner" element={<AITripPlanner />} />
        <Route path="/components" element={<ComponentDemo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-homestay" element={<AddHomestay />} />
        <Route path="/homestay/:id" element={<HomestayDetails />}/>
        <Route path="/my-bookings" element={<MyBookings />}/>
        <Route path="/host-dashboard" element={<HostDashboard />}/>
        <Route path="/edit-homestay/:id"element={<EditHomestay />}/>
        <Route path="/admin-dashboard"element={<AdminDashboard />}/>
        <Route path="/wishlist"element={<MyWishlist />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;