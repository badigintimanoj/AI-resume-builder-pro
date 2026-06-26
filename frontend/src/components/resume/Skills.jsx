import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Skills() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, value) => {
    const updated = [...resumeData.skills];
    updated[index] = value;

    setResumeData({
      ...resumeData,
      skills: updated,
    });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, ""],
    });
  };

  const removeSkill = (index) => {
    const updated = resumeData.skills.filter((_, i) => i !== index);

    setResumeData({
      ...resumeData,
      skills: updated,
    });
  };

  return (
    <div className="bg-blue-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Skills
      </h2>

      {resumeData.skills.map((skill, index) => (

        <div key={index} className="flex gap-3 mb-4">

          <input
            value={skill}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Skill"
            className="flex-1 p-3 rounded-lg bg-white text-black"
          />

          <button
            onClick={() => removeSkill(index)}
            className="bg-red-500 px-4 rounded-lg"
          >
            X
          </button>

        </div>

      ))}

      <button
        onClick={addSkill}
        className="bg-blue-500 px-6 py-3 rounded-lg mt-4"
      >
        + Add Skill
      </button>

    </div>
  );
}

export default Skills;