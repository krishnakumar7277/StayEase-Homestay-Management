import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
getWishlist,
} from "../api/wishlistApi";

function MyWishlist() {

  const [wishlist, setWishlist] =
  useState([]);

  useEffect(() => {

    const fetchWishlist =
    async () => {

      try {

        const user =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

        const data =
        await getWishlist(
          user.email
        );

        setWishlist(
          data.wishlist
        );

      } catch (error) {

        console.log(error);

      }

    };

    fetchWishlist();

  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          My Wishlist ❤️
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {wishlist.map(
            (item) => (

              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">

                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>

                  <p>
                    📍 {item.location}
                  </p>

                  <p className="text-green-700 font-bold mt-2">
                    ₹{item.price}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default MyWishlist;