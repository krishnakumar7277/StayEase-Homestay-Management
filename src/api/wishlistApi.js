import axios from "axios";

const API =
"http://localhost:5000/api/wishlist";

export const addWishlist =
async (data) => {

  const response =
  await axios.post(
    API,
    data
  );

  return response.data;
};

export const getWishlist =
async (email) => {

  const response =
  await axios.get(
    `${API}/${email}`
  );

  return response.data;
};