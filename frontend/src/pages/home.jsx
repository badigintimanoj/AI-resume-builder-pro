import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Templates from "../components/Templates";

function Home() {
  return (
    <div className="bg-blue-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
    </div>
  );
}

export default Home;