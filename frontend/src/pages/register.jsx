import { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("✅ Registration Successful");

      navigate("/");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 flex justify-center items-center p-8">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-center">

          <h1 className="text-4xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="text-blue-100 mt-3">
            Start building AI-powered resumes
          </p>

        </div>

        <div className="p-8">

          <label className="block font-semibold text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-xl p-4 mb-5 outline-none focus:border-blue-600"
          />

          <label className="block font-semibold text-gray-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-xl p-4 mb-5 outline-none focus:border-blue-600"
          />

          <label className="block font-semibold text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-xl p-4 mb-5 outline-none focus:border-blue-600"
          />

          <label className="block font-semibold text-gray-700 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-xl p-4 mb-6 outline-none focus:border-blue-600"
          />          <button
            onClick={handleRegister}
            disabled={loading}
            className="
            w-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            hover:from-blue-700
            hover:to-indigo-700
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
            {loading ? "Creating Account..." : "🚀 Create Account"}
          </button>

          <div className="flex items-center my-6">

            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="px-4 text-gray-500">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

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
            hover:bg-gray-100
            transition
            duration-300
            "
          >
            <FcGoogle size={26} />

            <span className="font-semibold">
              Continue with Google
            </span>

          </button>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?

            <span
              onClick={() => navigate("/login")}
              className="
              text-blue-700
              font-bold
              cursor-pointer
              ml-2
              hover:underline
              "
            >
              Login
            </span>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Register;