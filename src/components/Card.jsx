function Card({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-gray-600">
          {description}
        </p>

        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;