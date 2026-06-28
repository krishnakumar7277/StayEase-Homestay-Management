import { useState } from "react";
import { createReview } from "../api/reviewApi";

function ReviewForm({ homestayId }) {

  const [formData, setFormData] =
  useState({
    userName: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value,
    });
  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      await createReview({
        ...formData,
        homestayId,
      });

      alert(
        "Review Added Successfully"
      );

      setFormData({
        userName: "",
        rating: 5,
        comment: "",
      });

      window.location.reload();

    } catch (error) {

      console.log(error);

      alert(
        "Review Failed"
      );

    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg mt-8"
    >

      <h2 className="text-2xl font-bold mb-4">
        Add Review
      </h2>

      <input
        type="text"
        name="userName"
        placeholder="Your Name"
        value={formData.userName}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <select
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      >
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </select>

      <textarea
        name="comment"
        rows="4"
        placeholder="Write Review"
        value={formData.comment}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <button
        type="submit"
        className="bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Submit Review
      </button>

    </form>
  );
}

export default ReviewForm;