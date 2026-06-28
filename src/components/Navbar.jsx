import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
return ( <nav className="bg-white dark:bg-gray-900 shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

  <div className="flex items-center gap-2">
    <span className="text-3xl">🏡</span>

    <h1 className="text-2xl font-bold text-green-700">
      StayEase
    </h1>
  </div>

  <div className="hidden md:flex gap-8 font-medium text-black dark:text-white">
    <Link to="/">Home</Link>
    <Link to="/about">Explore</Link>
    <Link to="/ai-trip-planner">AI Planner</Link>
    <Link to="/add-homestay">Become Host</Link>
    <Link to="/my-bookings">My Bookings</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/host-dashboard"> Host Dashboard </Link>
    <Link to="/admin-dashboard"> Admin </Link>
    <Link to="/wishlist">Wishlist</Link>
  </div>

  <div className="flex gap-3 items-center">

    <ThemeToggle />

    <Link
      to="/login"
      className="border border-green-700 text-green-700 px-4 py-2 rounded-lg"
    >
      Login
    </Link>

    <Link
      to="/register"
      className="bg-green-700 text-white px-4 py-2 rounded-lg"
    >
      Sign Up
    </Link>

  </div>

</nav>

);
}

export default Navbar;
