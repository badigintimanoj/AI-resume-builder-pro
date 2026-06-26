import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="bg-blue-950 border-b border-blue-800 px-10 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-blue-400">
        AI Resume Builder
      </h1>

      <div className="flex gap-8 text-lg">

        <a href="#features">Features</a>

        <a href="#templates">Templates</a>

        <Link to="/ats-checker">ATS Checker</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">
          <button className="bg-blue-500 px-5 py-2 rounded-lg">
            Get Started
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default navbar;