import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AITripPlanner = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-16 px-6">

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-5xl font-bold text-center mb-4">
            AI Trip Planner
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Plan your perfect trip with AI-powered recommendations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold mb-2">
                Destination
              </label>

              <input
                type="text"
                placeholder="Goa, Manali, Rishikesh..."
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Budget
              </label>

              <input
                type="number"
                placeholder="5000"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Number of Days
              </label>

              <input
                type="number"
                placeholder="3"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Travel Type
              </label>

              <select className="w-full border p-3 rounded-lg">
                <option>Solo</option>
                <option>Family</option>
                <option>Friends</option>
                <option>Couple</option>
              </select>
            </div>

          </div>

          <div className="text-center mt-8">
            <button className="bg-green-700 text-white px-10 py-4 rounded-xl hover:bg-green-800">
              Generate AI Plan
            </button>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default AITripPlanner;