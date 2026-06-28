import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import {getHomestays, searchHomestays,} from "../api/homestayApi";



function Home() {
const [homestays, setHomestays] = useState([]);
const [search, setSearch] = useState("");


useEffect(() => {
fetchHomestays();
}, []);
const handleSearch = async () => {
try {
if (!search.trim()) {
fetchHomestays();
return;
}

const data =
  await searchHomestays(search);

setHomestays(data.homestays);

} catch (error) {
console.log(error);
}
};

const fetchHomestays = async () => {
try {
const data = await getHomestays();
setHomestays(data.homestays);
} catch (error) {
console.log(error);
}
};

return (
<> <Navbar />

  <Hero />

  <section className="bg-white py-10 px-6">
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 grid md:grid-cols-5 gap-4">

      <div>
        <label className="block text-sm font-semibold mb-2">
          Location
        </label>
          <input
            type="text"
            placeholder="Where to?"
            value={search}
            onChange={(e) =>
            setSearch(e.target.value)
            }
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
        <button
onClick={handleSearch}
className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"

>

Search </button>

      </div>

    </div>
  </section>

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

  <section className="py-20 px-6 bg-white">
    <h2 className="text-4xl font-bold text-center mb-12">
      Featured Homestays
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {homestays.map((item) => (
        <Card
          key={item._id}
          title={item.title}
          id={item._id}
          description={item.description}
          image={
          item.image.startsWith("http")
          ? item.image
          : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          }
          location={item.location}
          price={item.price}
        />

      ))}

    </div>
  </section>

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

  <Footer />
</>

);
}

export default Home;
