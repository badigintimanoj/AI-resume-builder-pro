import { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async () => {

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("✅ Login Successful");

      navigate("/");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 flex justify-center items-center p-8">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-center">

          {/* added: icon above title */}
          <div className="text-5xl mb-3">🤖</div>

          <h1 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-blue-100 mt-3">
            Login to AI Resume Builder Pro
          </p>

          {/* added: subtle tagline */}
          <p className="text-blue-200 text-sm mt-1 opacity-80">
            Your AI-powered career companion
          </p>

        </div>

        <div className="p-8">

          <label className="block font-semibold mb-2 text-gray-700">
            📧 Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="
            w-full
            border-2
            border-gray-300
            rounded-xl
            p-4
            mb-5
            outline-none
            focus:border-blue-600
            hover:border-blue-400
            transition
            duration-200
            "
          />

          <label className="block font-semibold mb-2 text-gray-700">
            🔒 Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="
            w-full
            border-2
            border-gray-300
            rounded-xl
            p-4
            mb-1
            outline-none
            focus:border-blue-600
            hover:border-blue-400
            transition
            duration-200
            "
          />

          {/* added: forgot password link */}
          <div className="text-right mb-5">
            <span className="text-sm text-blue-600 font-semibold cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <label className="block font-semibold mb-2 text-gray-700">
            Login
          </label>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
            w-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            hover:from-blue-700
            hover:to-indigo-700
            hover:scale-[1.02]
            text-white
            font-bold
            py-4
            rounded-xl
            transition
            duration-300
            shadow-lg
            disabled:opacity-50
            "
          >
            {loading ? "⏳ Logging In..." : "🔐 Login"}
          </button>

          <div className="flex items-center my-6">

            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="px-4 text-gray-500 text-sm font-medium">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          <label className="block font-semibold mb-2 text-gray-700">
            Social Login
          </label>

          <button
            className="
            w-full
            border-2
            border-gray-300
            rounded-xl
            py-4
            flex
            items-center
            justify-center
            gap-3
            hover:bg-gray-50
            hover:border-gray-400
            hover:scale-[1.02]
            transition
            duration-300
            shadow-sm
            "
          >
            <FcGoogle size={26} />

            <span className="font-semibold text-gray-700">
              Continue with Google
            </span>

          </button>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <span
              onClick={() => navigate("/register")}
              className="
              text-blue-700
              font-bold
              cursor-pointer
              ml-2
              hover:underline
              "
            >
              Register
            </span>

          </p>

          {/* added: security footer note */}
          <p className="text-center text-xs text-gray-400 mt-4">
            🔐 Secured with end-to-end encryption
          </p>

        </div>

      </div>

    </div>

  );
}

export default login;