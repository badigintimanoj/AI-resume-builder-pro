import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Languages() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const languages = resumeData.languages || [""];

  const handleChange = (index, value) => {
    const updated = [...languages];
    updated[index] = value;

    setResumeData({
      ...resumeData,
      languages: updated,
    });
  };

  const addLanguage = () => {
    setResumeData({
      ...resumeData,
      languages: [...languages, ""],
    });
  };

  const removeLanguage = (index) => {
    const updated = languages.filter((_, i) => i !== index);

    setResumeData({
      ...resumeData,
      languages: updated,
    });
  };

  return (
    <div className="bg-blue-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Languages
      </h2>

      {languages.map((language, index) => (
        <div key={index} className="flex gap-3 mb-4">

          <input
            value={language}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Language"
            className="flex-1 p-3 rounded-lg bg-white text-black"
          />

          <button
            onClick={() => removeLanguage(index)}
            className="bg-red-500 px-4 rounded-lg"
          >
            X
          </button>

        </div>
      ))}

      <button
        onClick={addLanguage}
        className="bg-blue-500 px-6 py-3 rounded-lg mt-4"
      >
        + Add Language
      </button>

    </div>
  );
}

export default Languages;