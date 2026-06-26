import { useState } from "react";
import axios from "axios";

function ATSchecker() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkATS = async () => {
    if (!resume || !job) {
      alert("Please enter Resume and Job Description");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/ats",
        {
          resume,
          job,
        }
      );

      const data = JSON.parse(res.data.result);

      setResult(data);
    } catch (err) {
      console.log(err);
      alert("ATS Check Failed");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = () => {
    if (!result) return "text-blue-600";

    if (result.score >= 80) return "text-green-600";

    if (result.score >= 60) return "text-yellow-500";

    return "text-red-600";
  };

  const getScoreMessage = () => {
    if (!result) return "";

    if (result.score >= 80) return "Excellent Resume";

    if (result.score >= 60) return "Good Resume";

    return "Needs Improvement";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h1 className="text-6xl font-extrabold text-white">
            🤖 AI ATS Resume Checker
          </h1>

          <p className="text-gray-300 text-xl mt-5">
            Analyze your Resume using Google Gemini AI
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              📄 Resume
            </h2>

            <textarea
              rows="20"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your Resume here..."
              className="
              w-full
              rounded-2xl
              border-2
              border-blue-200
              p-5
              text-gray-900
              placeholder:text-gray-500
              focus:outline-none
              focus:ring-4
              focus:ring-blue-300
              resize-none
              "
            />

          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              💼 Job Description
            </h2>

            <textarea
              rows="20"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder="Paste Job Description..."
              className="
              w-full
              rounded-2xl
              border-2
              border-blue-200
              p-5
              text-gray-900
              placeholder:text-gray-500
              focus:outline-none
              focus:ring-4
              focus:ring-blue-300
              resize-none
              "
            />

          </div>

        </div>

        <div className="flex justify-center mt-10">

          <button
            onClick={checkATS}
            disabled={loading}
            className="
            px-12
            py-5
            rounded-2xl
            text-xl
            font-bold
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            hover:scale-105
            duration-300
            shadow-2xl
            text-white
            disabled:opacity-50
            "
          >
            {loading ? "⏳ Checking ATS..." : "🚀 Check ATS Score"}
          </button>

        </div>

        {result && (

          <div className="mt-16">

            <div className="bg-white rounded-3xl shadow-2xl p-10">

              <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
                📊 ATS Analysis Report
              </h2>

              <div className="flex justify-center">

                <div
                  className="
                  h-56
                  w-56
                  rounded-full
                  border-[14px]
                  border-blue-200
                  flex
                  flex-col
                  justify-center
                  items-center
                  shadow-xl
                  "
                >

                  <h1
                    className={`text-7xl font-extrabold ${getScoreColor()}`}
                  >
                    {result.score}%
                  </h1>

                  <p className="font-bold text-gray-700 mt-2">
                    ATS Score
                  </p>

                  <p className={`font-semibold ${getScoreColor()}`}>
                    {getScoreMessage()}
                  </p>

                </div>

              </div>

              {/* FIX: removed erroneous </div> that was closing the grid prematurely */}
              <div className="grid md:grid-cols-2 gap-10 mt-14">

                <div className="bg-red-50 rounded-3xl p-8 shadow">

                  <h3 className="text-3xl font-bold text-red-600 mb-6">
                    ❌ Missing Skills
                  </h3>

                  {result.missingSkills.length === 0 ? (

                    <div className="bg-green-100 rounded-xl p-5 text-green-700 font-semibold">
                      🎉 No Missing Skills Found
                    </div>

                  ) : (

                    <div className="flex flex-wrap gap-3">

                      {result.missingSkills.map((skill, index) => (

                        <span
                          key={index}
                          className="
                          bg-red-200
                          text-red-800
                          px-5
                          py-3
                          rounded-full
                          font-semibold
                          shadow
                          "
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                  )}

                </div>

                <div className="bg-blue-50 rounded-3xl p-8 shadow">

                  <h3 className="text-3xl font-bold text-blue-700 mb-6">
                    💡 AI Suggestions
                  </h3>

                  <div className="space-y-4">

                    {result.suggestions.map((item, index) => (

                      <div
                        key={index}
                        className="
                        bg-blue-100
                        rounded-2xl
                        p-4
                        shadow
                        flex
                        items-start
                        gap-3
                        "
                      >
                        <span className="text-2xl">
                          ✔️
                        </span>

                        <p className="text-lg text-gray-700">
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">

                <div className="bg-green-100 rounded-2xl p-6 text-center shadow">

                  <h4 className="text-4xl font-bold text-green-700">
                    {result.score}%
                  </h4>

                  <p className="mt-2 font-semibold text-gray-700">
                    Resume Match
                  </p>

                </div>

                <div className="bg-red-100 rounded-2xl p-6 text-center shadow">

                  <h4 className="text-4xl font-bold text-red-600">
                    {result.missingSkills.length}
                  </h4>

                  <p className="mt-2 font-semibold text-gray-700">
                    Missing Skills
                  </p>

                </div>

                <div className="bg-blue-100 rounded-2xl p-6 text-center shadow">

                  <h4 className="text-4xl font-bold text-blue-700">
                    {result.suggestions.length}
                  </h4>

                  <p className="mt-2 font-semibold text-gray-700">
                    AI Suggestions
                  </p>

                </div>

              </div>

              <div className="text-center mt-12">

                <button
                  onClick={() => window.print()}
                  className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  text-lg
                  font-bold
                  shadow-xl
                  transition
                  duration-300
                  "
                >
                  📄 Print ATS Report
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default ATSchecker;