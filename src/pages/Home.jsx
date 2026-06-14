import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Homestays
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Mountain View Cottage"
            description="Enjoy breathtaking Himalayan views and peaceful surroundings."
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          />

          <Card
            title="Forest Retreat"
            description="Experience nature and comfort with eco-friendly stays."
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;