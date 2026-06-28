import axios from "axios";

const API = "http://localhost:5000/api/host";

export const getHostStats = async () => {
  const response = await axios.get(`${API}/stats`);
  return response.data;
};

export const getHostBookings = async () => {
  const response = await axios.get(`${API}/bookings`);
  return response.data;
};
export const updateHostBookingStatus =
async (bookingId, status) => {

  const response = await axios.put(
    `${API}/booking/${bookingId}`,
    { status }
  );

  return response.data;
};