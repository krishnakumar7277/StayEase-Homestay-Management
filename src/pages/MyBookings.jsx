import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBookings } from "../api/bookingApi";

function MyBookings() {
const [bookings, setBookings] =
useState([]);

useEffect(() => {
const fetchBookings = async () => {
try {
const data =
await getBookings();

    setBookings(data.bookings);
  } catch (error) {
    console.log(error);
  }
};

fetchBookings();

}, []);

return (
<> <Navbar />

  <div className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold mb-8">
      My Bookings
    </h1>

    <div className="grid md:grid-cols-2 gap-6">

      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            {booking.guestName}
          </h2>

          <p>
            📧 {booking.email}
          </p>

          <p>
            👥 Guests:
            {booking.guests}
          </p>

          <p>
            📅 Check In:
            {new Date(
              booking.checkIn
            ).toLocaleDateString()}
          </p>

          <p>
            📅 Check Out:
            {new Date(
              booking.checkOut
            ).toLocaleDateString()}
          </p>
        </div>
      ))}

    </div>

  </div>

  <Footer />
</>

);
}

export default MyBookings;
