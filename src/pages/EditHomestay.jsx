import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getSingleHomestay,
  updateHomestay,
} from "../api/homestayApi";

function EditHomestay() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      title: "",
      location: "",
      price: "",
      image: "",
      description: "",
    });

  useEffect(() => {
    fetchHomestay();
  }, []);

  const fetchHomestay = async () => {
    try {
      const data =
        await getSingleHomestay(id);

      setFormData(data.homestay);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateHomestay(
        id,
        formData
      );

      alert(
        "Homestay Updated Successfully"
      );

      navigate(
        "/host-dashboard"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
        >
          <h1 className="text-3xl font-bold text-center mb-6">
            Edit Homestay
          </h1>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-3 mb-4 rounded-lg"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-3 mb-4 rounded-lg"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-3 mb-4 rounded-lg"
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-3 mb-4 rounded-lg"
          />

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-3 mb-4 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg"
          >
            Update Homestay
          </button>
        </form>

      </div>

      <Footer />
    </>
  );
}

export default EditHomestay;