import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";

import { getSingleHomestay } from "../api/homestayApi";
import { createBooking } from "../api/bookingApi";
import { getReviews } from "../api/reviewApi";

function HomestayDetails() {

const { id } = useParams();

const [homestay, setHomestay] =
useState(null);

const [reviews, setReviews] =
useState([]);

const [bookingData, setBookingData] =
useState({
guestName: "",
email: "",
checkIn: "",
checkOut: "",
guests: 1,
});

useEffect(() => {

const fetchData = async () => {

  try {

    const homestayData =
    await getSingleHomestay(id);

    setHomestay(
      homestayData.homestay
    );

    const reviewData =
    await getReviews(id);

    setReviews(
      reviewData.reviews
    );

  } catch (error) {
    console.log(error);
  }

};

fetchData();

}, [id]);

const handleChange = (e) => {

setBookingData({
  ...bookingData,
  [e.target.name]:
  e.target.value,
});

};

const handleBooking =
async (e) => {

e.preventDefault();

try {

  await createBooking(
    bookingData
  );

  alert(
    "Booking Successful"
  );

  setBookingData({
    guestName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

} catch (error) {

  console.log(error);

  alert(
    "Booking Failed"
  );

}

};

if (!homestay) {

return (
  <div className="text-center mt-20">
    Loading...
  </div>
);

}

return (
<> <Navbar />

  <div className="min-h-screen bg-gray-50 py-12 px-6">

    <div className="max-w-6xl mx-auto">

      <img
        src={homestay.image}
        alt={homestay.title}
        className="w-full h-[500px] object-cover rounded-2xl"
      />

      <div className="bg-white mt-8 p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-4">
          {homestay.title}
        </h1>

        <p className="text-gray-600 mb-4">
          📍 {homestay.location}
        </p>

        <p className="text-2xl font-bold text-green-700 mb-4">
          ₹{homestay.price} / Night
        </p>

        <p className="text-lg mb-6">
          {homestay.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-green-50 p-4 rounded-xl">
            Free WiFi
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            Mountain View
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            Free Breakfast
          </div>

        </div>

        <form
          onSubmit={handleBooking}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="guestName"
            placeholder="Guest Name"
            value={bookingData.guestName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={bookingData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="date"
            name="checkIn"
            value={bookingData.checkIn}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="date"
            name="checkOut"
            value={bookingData.checkOut}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="guests"
            value={bookingData.guests}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            min="1"
            required
          />

          <button
            type="submit"
            className="bg-green-700 text-white rounded-lg p-3"
          >
            Book Now
          </button>

        </form>

        <ReviewForm homestayId={id} />

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Guest Reviews
          </h2>

          {reviews.length === 0 ? (

            <p>No Reviews Yet</p>

          ) : (

            reviews.map(
              (review) => (

                <div
                  key={review._id}
                  className="border-b py-4"
                >

                  <h3 className="font-bold">
                    {review.userName}
                  </h3>

                  <p>
                    {"⭐".repeat(
                      review.rating
                    )}
                  </p>

                  <p>
                    {review.comment}
                  </p>

                </div>

              )
            )

          )}

        </div>

      </div>

    </div>

  </div>

  <Footer />
</>

);
}

export default HomestayDetails;
