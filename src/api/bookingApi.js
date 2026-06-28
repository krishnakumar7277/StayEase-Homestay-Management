import axios from "axios";

const API =
"http://localhost:5000/api/bookings";

export const createBooking = async (
  bookingData
) => {
  const response = await axios.post(
    API,
    bookingData
  );

  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(API);

  return response.data;
};

export const updateBookingStatus = async (
  id,
  status
) => {
  const response = await axios.put(
    `${API}/${id}`,
    {
      status,
    }
  );

  return response.data;
};