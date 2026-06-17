import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-3xl font-bold text-green-700">
              12
            </h2>
            <p>Total Bookings</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-3xl font-bold text-blue-600">
              4
            </h2>
            <p>Upcoming Trips</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-3xl font-bold text-orange-500">
              8
            </h2>
            <p>Saved Homestays</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-3xl font-bold text-purple-600">
              AI
            </h2>
            <p>Recommendations</p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;