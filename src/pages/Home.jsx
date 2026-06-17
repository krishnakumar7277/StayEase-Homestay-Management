import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Search Section */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 grid md:grid-cols-5 gap-4">

          <div>
            <label className="block text-sm font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Check In
            </label>
            <input
              type="date"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Check Out
            </label>
            <input
              type="date"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Guests
            </label>
            <input
              type="number"
              placeholder="2"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div className="flex items-end">
            <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
              Search
            </button>
          </div>

        </div>
      </section>

      {/* Trending Destinations */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trending Destinations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🏔️
            <h3 className="font-bold mt-3">
              Manali
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🌊
            <h3 className="font-bold mt-3">
              Goa
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🌲
            <h3 className="font-bold mt-3">
              Nainital
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🏕️
            <h3 className="font-bold mt-3">
              Rishikesh
            </h3>
          </div>

        </div>
      </section>

      {/* Featured Homestays */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Homestays
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Mountain View Cottage"
            description="Enjoy breathtaking Himalayan views and peaceful surroundings."
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          />

          <Card
            title="Forest Retreat"
            description="Experience nature and comfort with eco-friendly stays."
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
          />

          <Card
            title="Luxury Riverside Villa"
            description="Relax beside the river with premium facilities."
            image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          />
        </div>
      </section>

      {/* AI Planner */}
      <section className="bg-green-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            AI Powered Trip Planning
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Let our AI create personalized travel itineraries based on
            your destination, budget, and interests.
          </p>

          <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700">
            Try AI Planner
          </button>
        </div>
      </section>

      {/* Why Choose StayEase */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose StayEase?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Verified Homestays
            </h3>
            <p>
              Every listing is verified to ensure trust and quality.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              AI Recommendations
            </h3>
            <p>
              Smart suggestions based on your preferences.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Secure Booking
            </h3>
            <p>
              Fast and secure booking experience for all travelers.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold">
              500+
            </h2>
            <p>Homestays</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              50K+
            </h2>
            <p>Happy Guests</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              100+
            </h2>
            <p>Destinations</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              4.9★
            </h2>
            <p>Average Rating</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;