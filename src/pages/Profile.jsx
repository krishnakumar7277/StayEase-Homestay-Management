import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
const user = JSON.parse(
localStorage.getItem("user")
);

return (
<> <Navbar />

  <div className="min-h-screen bg-gray-100 p-8">

    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="space-y-4">

        <div>
          <h3 className="font-semibold">
            Full Name
          </h3>

          <p>{user?.name}</p>
        </div>

        <div>
          <h3 className="font-semibold">
            Email
          </h3>

          <p>{user?.email}</p>
        </div>

        <div>
          <h3 className="font-semibold">
            Role
          </h3>

          <p>{user?.role}</p>
        </div>

      </div>

    </div>

  </div>

  <Footer />
</>

);
}

export default Profile;
