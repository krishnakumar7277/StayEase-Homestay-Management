import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getAdminStats,
  getAllHomestays,
  updateHomestayStatus,
} from "../api/adminApi";

import {
  getBookings,
  updateBookingStatus,
} from "../api/bookingApi";
function AdminDashboard() {

  const [stats, setStats] =
  useState(null);
  const [bookings, setBookings] =useState([]);
  const [homestays,setHomestays] = useState([]);


const fetchBookings = async () => {
  try {
    const data = await getBookings();
    setBookings(data.bookings);
  } catch (error) {
    console.log(error);
  }
};
const fetchHomestays = async () => {

  try {

    const data =
      await getAllHomestays();

    setHomestays(
      data.homestays
    );

  } catch (error) {

    console.log(error);

  }

};
const handleStatusUpdate = async (id, status) => {
  try {
    await updateBookingStatus(id, status);

    alert("Status Updated Successfully");

    fetchBookings();
    fetchStats();

  } catch (error) {
    console.log(error);
  }
};
const handleHomestayApproval =
async (id, status) => {

  try {

    await updateHomestayStatus(
      id,
      status
    );

    alert(
      "Homestay Status Updated"
    );

    fetchHomestays();

  } catch (error) {

    console.log(error);

  }

};
useEffect(() => {
  fetchStats();
  fetchBookings();
  fetchHomestays();
}, []);

  const fetchStats = async () => {

    try {

      const data =
      await getAdminStats();

      setStats(data);

    } catch (error) {
      console.log(error);
    }

  };

  if (!stats) {
    return (
      <div className="text-center mt-20">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-lg">
  <h2 className="text-4xl font-bold text-orange-600">
    ₹{stats.totalRevenue}
  </h2>

  <p>Total Revenue</p>
</div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-blue-600">
              {stats.totalUsers}
            </h2>

            <p>Total Users</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-green-600">
              {stats.totalHomestays}
            </h2>

            <p>Total Homestays</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-purple-600">
              {stats.totalBookings}
            </h2>

            <p>Total Bookings</p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-4">
              Recent Users
            </h2>

            <table className="w-full">

              <thead>
                <tr>
                  <th className="text-left p-2">
                    Name
                  </th>

                  <th className="text-left p-2">
                    Email
                  </th>
                </tr>
              </thead>

              <tbody>

                {stats.recentUsers.map(
                  (user) => (
                    <tr
                      key={user._id}
                    >
                      <td className="p-2">
                        {user.name}
                      </td>

                      <td className="p-2">
                        {user.email}
                      </td>
                    </tr>
                  )
                )}

              </tbody>

            </table>
            <div className="grid md:grid-cols-3 gap-6 mt-10">

  <div className="bg-green-100 p-6 rounded-xl">

    <h2 className="text-3xl font-bold text-green-700">
      {stats.confirmedBookings}
    </h2>

    <p>Confirmed Bookings</p>

  </div>

  <div className="bg-yellow-100 p-6 rounded-xl">

    <h2 className="text-3xl font-bold text-yellow-700">
      {stats.pendingBookings}
    </h2>

    <p>Pending Bookings</p>

  </div>

  <div className="bg-red-100 p-6 rounded-xl">

    <h2 className="text-3xl font-bold text-red-700">
      {stats.cancelledBookings}
    </h2>

    <p>Cancelled Bookings</p>

  </div>

</div>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">

  <h2 className="text-2xl font-bold mb-4">
    Booking Management
  </h2>

  <table className="w-full">

    <thead>

      <tr>

        <th className="p-2 text-left">
          Guest
        </th>

        <th className="p-2 text-left">
          Guests
        </th>

        <th className="p-2 text-left">
          Status
        </th>

        <th className="p-2 text-left">
          Action
        </th>

      </tr>

    </thead>

    <tbody>

      {bookings.map((booking) => (

        <tr
          key={booking._id}
          className="border-b"
        >

          <td className="p-2">
            {booking.guestName}
          </td>

          <td className="p-2">
            {booking.guests}
          </td>

          <td className="p-2">

            <span
              className={
                booking.status === "Confirmed"
                ? "text-green-600 font-bold"
                : booking.status === "Cancelled"
                ? "text-red-600 font-bold"
                : "text-yellow-600 font-bold"
              }
            >
              {booking.status}
            </span>

          </td>

          <td className="p-2">

            <button
              onClick={() =>
                handleStatusUpdate(
                  booking._id,
                  "Confirmed"
                )
              }
              className="bg-green-600 text-white px-3 py-1 rounded mr-2"
            >
              Confirm
            </button>

            <button
              onClick={() =>
                handleStatusUpdate(
                  booking._id,
                  "Cancelled"
                )
              }
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>

          </td>

        </tr>

      ))}

    </tbody>

  </table>
<div className="bg-white p-6 rounded-xl shadow-lg mt-10">

  <h2 className="text-2xl font-bold mb-4">

    Homestay Approval Management

  </h2>

  <table className="w-full">

    <thead>

      <tr>

        <th className="p-2 text-left">
          Title
        </th>

        <th className="p-2 text-left">
          Location
        </th>

        <th className="p-2 text-left">
          Status
        </th>

        <th className="p-2 text-left">
          Action
        </th>

      </tr>

    </thead>

    <tbody>

      {homestays.map(
        (homestay) => (

          <tr
            key={homestay._id}
            className="border-b"
          >

            <td className="p-2">
              {homestay.title}
            </td>

            <td className="p-2">
              {homestay.location}
            </td>

            <td className="p-2">

              <span
                className={
                  homestay.approvalStatus ===
                  "Approved"
                    ? "text-green-600 font-bold"
                    : homestay.approvalStatus ===
                      "Rejected"
                    ? "text-red-600 font-bold"
                    : "text-yellow-600 font-bold"
                }
              >
                {
                  homestay.approvalStatus
                }
              </span>

            </td>

            <td className="p-2">

              <button
                onClick={() =>
                  handleHomestayApproval(
                    homestay._id,
                    "Approved"
                  )
                }
                className="bg-green-600 text-white px-3 py-1 rounded mr-2"
              >
                Approve
              </button>

              <button
                onClick={() =>
                  handleHomestayApproval(
                    homestay._id,
                    "Rejected"
                  )
                }
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>

            </td>

          </tr>

        )
      )}

    </tbody>

  </table>

</div>
</div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default AdminDashboard;