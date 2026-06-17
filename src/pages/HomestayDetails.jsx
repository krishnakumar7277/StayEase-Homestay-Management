import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomestayDetails() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12 px-6">

        <div className="max-w-6xl mx-auto">

          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
            alt="Homestay"
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          <div className="bg-white mt-8 p-8 rounded-2xl shadow-lg">

            <h1 className="text-4xl font-bold mb-4">
              Luxury Riverside Villa
            </h1>

            <p className="text-gray-600 mb-4">
              📍 Rishikesh, Uttarakhand
            </p>

            <p className="text-lg mb-6">
              Beautiful riverside villa with mountain views,
              private rooms, free WiFi, and amazing hospitality.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-green-50 p-4 rounded-xl">
                Free WiFi
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                Mountain View
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                Free Breakfast
              </div>

            </div>

            <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800">
              Book Now
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default HomestayDetails;