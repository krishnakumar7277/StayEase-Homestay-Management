function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
          ❤️
        </div>

        <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
          Verified
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <span className="font-semibold">
            ⭐ 4.8
          </span>
        </div>

        <p className="text-gray-500 mb-3">
          📍 Uttarakhand, India
        </p>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-green-700">
              ₹2,499
            </span>
            <span className="text-gray-500">
              {" "}
              / night
            </span>
          </div>

          <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;