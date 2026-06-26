import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function TemplateSelector() {

  const { resumeData, setResumeData } = useContext(ResumeContext);

  const templates = [
    "ATS",
    "Modern",
    "Professional",
    "Executive",
    "Creative",
  ];

  return (

    <div className="flex gap-3 mb-6 flex-wrap">

      {templates.map((template) => (

        <button
          key={template}
          onClick={() =>
            setResumeData({
              ...resumeData,
              selectedTemplate: template,
            })
          }
          className={`px-5 py-2 rounded-lg ${
            resumeData.selectedTemplate === template
              ? "bg-blue-600"
              : "bg-gray-700"
          }`}
        >
          {template}
        </button>

      ))}

    </div>

  );

}

export default TemplateSelector;