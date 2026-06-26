import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ResumeBuilder from "./pages/resumeBuilder";
import ATSChecker from "./pages/ATSChecker";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-blue-950 text-white">

        <nav className="bg-blue-900 p-4 flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/resume-builder">Resume Builder</Link>
          <Link to="/ats-checker">ATS Checker</Link>
        </nav>

        <div className="p-10">

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route
              path="/resume-builder"
              element={<ResumeBuilder />}
            />

            <Route
              path="/ats-checker"
              element={<ATSChecker />}
            />
          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;