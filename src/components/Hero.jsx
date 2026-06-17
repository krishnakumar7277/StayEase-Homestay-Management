function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Discover Your Perfect
          <span className="text-green-400"> Homestay</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Experience authentic stays, local culture, and unforgettable
          journeys with StayEase.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold">
            Explore Homestays
          </button>

          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold">
            AI Trip Planner
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;