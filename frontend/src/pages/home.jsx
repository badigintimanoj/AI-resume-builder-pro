import Navbar from "../components/navbar";
import hero from "../components/hero";
import features from "../components/features";
import templates from "../components/templates";

function home() {
  return (
    <div className="bg-blue-950 text-white min-h-screen">
      <navbar />
      <hero />
      <features />
      <templates />
    </div>
  );
}

export default home;