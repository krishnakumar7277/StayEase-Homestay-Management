import {getHostStats,} from "../api/hostApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
getHomestays,
deleteHomestay,
} from "../api/homestayApi";
import {
  getHostBookings,
  updateHostBookingStatus,
} from "../api/hostApi";
import {
  getAllReviews,
} from "../api/reviewApi";
function HostDashboard() {
const [homestays, setHomestays] =useState([]);
const [hostStats,setHostStats] =useState(null);
const [bookings, setBookings] = useState([]);
const [reviews, setReviews] =useState([]);
const fetchHomestays = async () => {
try {
const data =
await getHomestays();

  setHomestays(data.homestays);
} catch (error) {
  console.log(error);
}

};
const fetchHostStats = async () => {
  try {

    const data =
    await getHostStats();

    setHostStats(data);

  } catch (error) {

    console.log(error);

  }
};
const fetchBookings = async () => {
  try {

    const data =
      await getHostBookings();

    setBookings(data.bookings);

  } catch (error) {

    console.log(error);

  }
};
const fetchReviews = async () => {

  try {

    const data =
    await getAllReviews();

    setReviews(data.reviews);

  } catch (error) {

    console.log(error);

  }
};
useEffect(() => {
fetchHomestays();
fetchHostStats();
fetchBookings();
fetchReviews();
}, []);
const handleBookingStatus = async (
  bookingId,
  status
) => {

  try {

    await updateHostBookingStatus(
      bookingId,
      status
    );

    alert(
      "Booking Status Updated"
    );

    fetchBookings();
    fetchHostStats();

  } catch (error) {

    console.log(error);

  }
};
const handleDelete = async (id) => {
const confirmDelete =
window.confirm(
"Delete this homestay?"
);

if (!confirmDelete) return;

try {
  await deleteHomestay(id);

  alert(
    "Homestay Deleted Successfully"
  );

  fetchHomestays();
} catch (error) {
  console.log(error);
}

};

return (
<> <Navbar />

  <div className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold mb-8">
  Host Dashboard
</h1>

{
hostStats && (

<div className="grid md:grid-cols-4 gap-6 mb-8">

  <div className="bg-blue-100 p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-blue-700">
      {hostStats.totalHomestays}
    </h2>
    <p>Total Homestays</p>
  </div>

  <div className="bg-purple-100 p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-purple-700">
      {hostStats.totalBookings}
    </h2>
    <p>Total Bookings</p>
  </div>

  <div className="bg-green-100 p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-green-700">
      {hostStats.confirmedBookings}
    </h2>
    <p>Confirmed Bookings</p>
  </div>

  <div className="bg-orange-100 p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-orange-700">
      ₹{hostStats.totalRevenue}
    </h2>
    <p>Total Revenue</p>
  </div>

</div>

)
}

    <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">
              Title
            </th>

            <th className="p-3 text-left">
              Location
            </th>

            <th className="p-3 text-left">
              Price
            </th>

            <th className="p-3 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>

          {homestays.map(
            (item) => (
              <tr
                key={item._id}
                className="border-b"
              >
                <td className="p-3">
                  {item.title}
                </td>

                <td className="p-3">
                  {item.location}
                </td>

                <td className="p-3">
                  ₹{item.price}
                </td>

                <td className="p-3">

                  <Link
  to={`/edit-homestay/${item._id}`}
  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
>
  Edit
</Link>

                  <button
                    onClick={() =>
                      handleDelete(
                        item._id
                      )
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            )
          )}

        </tbody>

      </table>
      <div className="bg-white rounded-xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold mb-4">
    Booking Management
  </h2>
  <div className="bg-white rounded-xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold mb-4">
    Guest Reviews
  </h2>

  <table className="w-full">

    <thead>

      <tr className="border-b">

        <th className="p-3 text-left">
          User
        </th>

        <th className="p-3 text-left">
          Rating
        </th>

        <th className="p-3 text-left">
          Comment
        </th>

      </tr>

    </thead>

    <tbody>

      {reviews.map((review) => (

        <tr
          key={review._id}
          className="border-b"
        >

          <td className="p-3">
            {review.userName}
          </td>

          <td className="p-3">
            ⭐ {review.rating}/5
          </td>

          <td className="p-3">
            {review.comment}
          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>
  <table className="w-full">

    <thead>

      <tr className="border-b">

        <th className="p-3 text-left">
          Guest
        </th>

        <th className="p-3 text-left">
          Email
        </th>

        <th className="p-3 text-left">
          Guests
        </th>

        <th className="p-3 text-left">
          Status
        </th>

        <th className="p-3 text-left">
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

          <td className="p-3">
            {booking.guestName}
          </td>

          <td className="p-3">
            {booking.email}
          </td>

          <td className="p-3">
            {booking.guests}
          </td>

          <td className="p-3">

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

          <td className="p-3">

            <button
              onClick={() =>
                handleBookingStatus(
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
                handleBookingStatus(
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

</div>

    </div>

  </div>

  <Footer />
</>

);
}

export default HostDashboard;
