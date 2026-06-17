function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-green-400">
            StayEase
          </h2>

          <p className="mt-4 text-gray-400">
            Smart Homestay Booking & Management Platform
            powered by AI recommendations and seamless booking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Explore</li>
            <li>AI Planner</li>
            <li>Dashboard</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 support@stayease.com
          </p>

          <p className="text-gray-400 mt-2">
            📞 +91 9876543210
          </p>

          <div className="flex gap-4 mt-4 text-2xl">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-5 text-gray-500">
        © 2026 StayEase. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;