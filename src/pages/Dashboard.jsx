import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">
          Dashboard
        </h1>

        <p>
          Guest and Host dashboard will be available here.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;