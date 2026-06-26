import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const project = resumeData.projects[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData({
      ...resumeData,
      projects: [
        {
          ...project,
          [name]: value,
        },
      ],
    });
  };

  return (
    <div className="bg-blue-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="title"
          placeholder="Project Title"
          value={project.title}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="tech"
          placeholder="Tech Stack"
          value={project.tech}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="github"
          placeholder="GitHub URL"
          value={project.github}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="live"
          placeholder="Live Demo URL"
          value={project.live}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

      </div>

      <textarea
        name="description"
        rows="5"
        placeholder="Project Description"
        value={project.description}
        onChange={handleChange}
        className="mt-5 w-full p-3 rounded-lg bg-white text-black"
      />

    </div>
  );
}

export default Projects;