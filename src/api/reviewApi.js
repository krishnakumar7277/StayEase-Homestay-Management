import axios from "axios";

const API =
"http://localhost:5000/api/reviews";

export const createReview =
async (reviewData) => {

  const response =
  await axios.post(
    API,
    reviewData
  );

  return response.data;
};

export const getReviews =
async (homestayId) => {

  const response =
  await axios.get(
    `${API}/${homestayId}`
  );

  return response.data;
};

export const getAllReviews =
async () => {

  const response =
  await axios.get(
    `${API}/all`
  );

  return response.data;
};