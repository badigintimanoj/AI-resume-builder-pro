import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Education() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const education = resumeData.education[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedEducation = {
      ...education,
      [name]: value,
    };

    setResumeData({
      ...resumeData,
      education: [updatedEducation],
    });
  };

  return (
    <div className="bg-blue-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Education
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="college"
          value={education.college}
          onChange={handleChange}
          placeholder="College Name"
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="degree"
          value={education.degree}
          onChange={handleChange}
          placeholder="Degree"
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="branch"
          value={education.branch}
          onChange={handleChange}
          placeholder="Branch"
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="cgpa"
          value={education.cgpa}
          onChange={handleChange}
          placeholder="CGPA"
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="startYear"
          value={education.startYear}
          onChange={handleChange}
          placeholder="Start Year"
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="endYear"
          value={education.endYear}
          onChange={handleChange}
          placeholder="End Year"
          className="p-3 rounded-lg bg-white text-black"
        />

      </div>

    </div>
  );
}

export default Education;