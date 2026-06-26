import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Achievements() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const achievement = resumeData.achievements?.[0] || "";

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      achievements: [e.target.value],
    });
  };

  return (
    <div className="bg-blue-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Achievements
      </h2>

      <textarea
        rows="8"
        placeholder="Write your achievements..."
        value={achievement}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white text-black"
      />

    </div>
  );
}

export default Achievements;