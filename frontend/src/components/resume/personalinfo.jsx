import { useContext, useState } from "react";
import axios from "axios";
import { ResumeContext } from "../../context/ResumeContext";

function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        [name]: value,
      },
    });
  };

  const generateSummary = async () => {
    try {
      setLoading(true);

      const skills = resumeData.skills.join(", ");

      const res = await axios.post(
        "http://localhost:5000/api/ai/summary",
        {
          name: resumeData.personal.fullName,
          skills,
        }
      );

      setResumeData({
        ...resumeData,
        personal: {
          ...resumeData.personal,
          summary: res.data.summary,
        },
      });
    } catch (err) {
      console.log(err);
      alert("AI Summary Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-900 rounded-2xl p-8 shadow-xl">

      <h2 className="text-3xl font-bold mb-8">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="fullName"
          placeholder="Full Name"
          value={resumeData.personal.fullName}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={resumeData.personal.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black outline-none"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={resumeData.personal.phone}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black outline-none"
        />

        <input
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={resumeData.personal.linkedin}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black outline-none"
        />

        <input
          name="github"
          placeholder="GitHub Profile"
          value={resumeData.personal.github}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black outline-none"
        />

        <input
          name="portfolio"
          placeholder="Portfolio Website"
          value={resumeData.personal.portfolio}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black outline-none"
        />

      </div>

      <textarea
        name="summary"
        rows="6"
        placeholder="Professional Summary"
        value={resumeData.personal.summary}
        onChange={handleChange}
        className="mt-6 w-full p-3 rounded-lg bg-white text-black outline-none resize-none"
      />

      <button
        onClick={generateSummary}
        disabled={loading}
        className="mt-5 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
      >
        {loading ? "Generating..." : "✨ Generate AI Summary"}
      </button>

    </div>
  );
}

export default PersonalInfo;