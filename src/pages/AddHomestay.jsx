import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddHomestay() {
const [formData, setFormData] = useState({
title: "",
location: "",
price: "",
image: "",
description: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  await axios.post(
    "http://localhost:5000/api/homestays",
    formData
  );

  alert("Homestay Added Successfully");

  setFormData({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

} catch (error) {
  console.log(error);
  alert("Failed");
}

};

return (
<> <Navbar />

  <div className="min-h-screen flex justify-center items-center bg-gray-100">

    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg"
    >
      <h1 className="text-3xl font-bold text-center mb-6">
        Become a Host
      </h1>

      <input
        type="text"
        name="title"
        placeholder="Homestay Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <input
        type="number"
        name="price"
        placeholder="Price Per Night"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <textarea
        name="description"
        placeholder="Description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-3 rounded-lg"
      >
        Add Homestay
      </button>
    </form>

  </div>

  <Footer />
</>

);
}

export default AddHomestay;
