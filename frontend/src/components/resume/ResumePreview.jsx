import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);

  const { personal } = resumeData;

  return (
    <div
      id="resume-preview"
      className="bg-white text-black rounded-2xl shadow-2xl p-8 min-h-[750px] sticky top-5 overflow-y-auto"
    >
      {/* Header */}
      <div className="border-b pb-5 mb-5">
        <h1 className="text-4xl font-bold text-blue-900">
          {personal.fullName || "Your Name"}
        </h1>

        <p>📧 {personal.email || "example@gmail.com"}</p>
        <p>📱 {personal.phone || "+91 9876543210"}</p>
        <p>💼 {personal.linkedin || "linkedin.com/in/username"}</p>
        <p>💻 {personal.github || "github.com/username"}</p>
        <p>🌐 {personal.portfolio || "portfolio.com"}</p>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Professional Summary
        </h2>

        <p className="text-gray-700 whitespace-pre-line">
          {personal.summary ||
            "Write your professional summary here."}
        </p>
      </div>

      {/* Education */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Education
        </h2>

        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{edu.degree}</h3>
            <p>{edu.college}</p>
            <p>{edu.branch}</p>
            <p>
              {edu.startYear} - {edu.endYear}
            </p>
            <p>CGPA: {edu.cgpa}</p>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Experience
        </h2>

        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-5">
            <h3 className="font-bold text-lg">{exp.role}</h3>
            <p>{exp.company}</p>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Projects
        </h2>

        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-5">
            <h3 className="font-bold">{project.title}</h3>

            <p>
              <strong>Tech:</strong> {project.tech}
            </p>

            <p>{project.description}</p>

            {project.github && (
              <p>
                <strong>GitHub:</strong> {project.github}
              </p>
            )}

            {project.live && (
              <p>
                <strong>Live:</strong> {project.live}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Certificates */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Certificates
        </h2>

        {resumeData.certificates.map((cert, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-bold">{cert.name}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.year}</p>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Languages
        </h2>

        <ul className="list-disc ml-5">
          {resumeData.languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Achievements
        </h2>

        <ul className="list-disc ml-5">
          {resumeData.achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumePreview;