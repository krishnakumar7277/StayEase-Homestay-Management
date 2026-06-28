import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { registerUser } from "../api/registerApi";

function Register() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  await registerUser(formData);

  alert("Registration Successful");

  navigate("/login");
} catch (error) {
  alert(
    error.response?.data?.message ||
    "Registration Failed"
  );
}

};

return (
<> <Navbar />

  <div className="min-h-screen flex justify-center items-center bg-gray-100">

    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create Account
      </h1>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full border p-3 mb-4 rounded-lg"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-3 mb-4 rounded-lg"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border p-3 mb-4 rounded-lg"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-3 rounded-lg"
      >
        Register
      </button>
    </form>

  </div>

  <Footer />
</>
);
}

export default Register;
