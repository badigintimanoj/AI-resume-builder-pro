import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div className="bg-white text-black rounded-2xl shadow-xl p-8 min-h-[700px]">

      <h1 className="text-4xl font-bold">
        {resumeData.personal.fullName || "Your Name"}
      </h1>

      <p className="mt-2">
        {resumeData.personal.email}
      </p>

      <p>
        {resumeData.personal.phone}
      </p>

      <p>
        {resumeData.personal.linkedin}
      </p>

      <p>
        {resumeData.personal.github}
      </p>

      <p>
        {resumeData.personal.portfolio}
      </p>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold">
        Professional Summary
      </h2>

      <p className="mt-3 whitespace-pre-line">
        {resumeData.personal.summary ||
          "Write a professional summary..."}
      </p>

    </div>
  );
}

export default ResumePreview;