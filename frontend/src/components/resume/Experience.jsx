import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Experience() {

  const { resumeData, setResumeData } = useContext(ResumeContext);

  const experience = resumeData.experience[0];

  const handleChange = (e) => {

    const { name, value } = e.target;

    const updated = {
      ...experience,
      [name]: value,
    };

    setResumeData({
      ...resumeData,
      experience: [updated],
    });

  };

  return (

    <div className="bg-blue-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="company"
          placeholder="Company Name"
          value={experience.company}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="role"
          placeholder="Job Role"
          value={experience.role}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="startDate"
          placeholder="Start Date"
          value={experience.startDate}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="endDate"
          placeholder="End Date"
          value={experience.endDate}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

      </div>

      <textarea
        name="description"
        rows="5"
        placeholder="Describe your work..."
        value={experience.description}
        onChange={handleChange}
        className="mt-5 w-full p-3 rounded-lg bg-white text-black"
      />

    </div>

  );

}

export default Experience;