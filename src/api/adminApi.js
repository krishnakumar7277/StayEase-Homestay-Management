import axios from "axios";

const API =
"http://localhost:5000/api/admin";

export const getAdminStats =
async () => {

  const response =
  await axios.get(
    `${API}/stats`
  );

  return response.data;
};
export const getBookings = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/bookings"
  );

  return response.data;
};
export const getAllHomestays = async () => {

  const response =
    await axios.get(
      `${API}/homestays`
    );

  return response.data;
};

export const updateHomestayStatus =
async (id, status) => {

  const response =
    await axios.put(
      `${API}/homestays/${id}`,
      {
        status,
      }
    );

  return response.data;
};