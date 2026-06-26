import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold mb-6">
          Build ATS Friendly
          <br />
          Resume using AI
        </h1>

        <p className="text-blue-200 text-xl mb-10">
          Create professional resumes in minutes using Artificial Intelligence.
        </p>

        <div className="flex justify-center gap-5">

          <Link to="/resume-builder">
            <button className="bg-blue-500 px-8 py-4 rounded-xl text-lg">
              Build Resume
            </button>
          </Link>

          <Link to="/ats-checker">
            <button className="border border-blue-400 px-8 py-4 rounded-xl text-lg">
              Check ATS
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;