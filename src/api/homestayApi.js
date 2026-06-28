import axios from "axios";

const API = "http://localhost:5000/api/homestays";

export const getHomestays = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const getSingleHomestay = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

export const searchHomestays = async (keyword) => {
  const response = await axios.get(
    `${API}/search?q=${keyword}`
  );
  return response.data;
};

export const deleteHomestay = async (id) => {
  const response = await axios.delete(
    `${API}/${id}`
  );
  return response.data;
};

export const updateHomestay = async (
  id,
  formData
) => {
  const response = await axios.put(
    `${API}/${id}`,
    formData
  );

  return response.data;
};