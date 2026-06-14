import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="p-10 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">
          About StayEase
        </h1>

        <p>
          StayEase is a Homestay Booking & Management System
          designed to connect guests directly with hosts.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;