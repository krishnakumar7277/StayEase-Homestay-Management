import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome Back
          </h1>

          <div className="space-y-4">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
            />

            <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
              Login
            </button>

          </div>

          <p className="text-center mt-6 text-gray-500">
            Don't have an account? Sign Up
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Login;