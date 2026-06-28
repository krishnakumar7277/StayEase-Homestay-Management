import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBookings } from "../api/bookingApi";

function Dashboard() {
const navigate = useNavigate();

const [totalBookings, setTotalBookings] =
useState(0);

const user = JSON.parse(
localStorage.getItem("user")
);

useEffect(() => {
const token =
localStorage.getItem("token");

if (!token) {
  navigate("/login");
  return;
}

const fetchBookings = async () => {
  try {
    const data =
      await getBookings();

    setTotalBookings(
      data.bookings.length
    );
  } catch (error) {
    console.log(error);
  }
};

fetchBookings();

}, [navigate]);

const handleLogout = () => {
localStorage.removeItem("token");
localStorage.removeItem("user");

alert("Logged Out Successfully");

navigate("/login");

};

return (
<> <Navbar />

  <div className="min-h-screen bg-gray-100 p-8">

    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome, {user?.name}
        </p>
      </div>

      <div className="flex gap-3">

        <button
          onClick={() =>
            navigate("/profile")
          }
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-green-700">
          {totalBookings}
        </h2>
        <p>Total Bookings</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-blue-600">
          {user?.role}
        </h2>
        <p>User Role</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-orange-500">
          StayEase
        </h2>
        <p>Platform</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-purple-600">
          AI
        </h2>
        <p>Recommendations</p>
      </div>

    </div>

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() =>
            navigate("/add-homestay")
          }
          className="bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          Become Host
        </button>

        <button
          onClick={() =>
            navigate("/my-bookings")
          }
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          My Bookings
        </button>

        <button
          onClick={() =>
            navigate("/ai-trip-planner")
          }
          className="bg-purple-600 text-white px-5 py-3 rounded-lg"
        >
          AI Planner
        </button>

      </div>

    </div>

  </div>

  <Footer />
</>

);
}

export default Dashboard;
