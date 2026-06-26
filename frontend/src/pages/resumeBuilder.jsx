import { useState, useContext } from "react";
import axios from "axios";

import { ResumeContext } from "../context/ResumeContext";

import resumesidebar from "../components/resume/resumesidebar";
import ProgressBar from "../components/resume/ProgressBar";
import ResumePreview from "../components/resume/ResumePreview";

import PersonalInfo from "../components/resume/PersonalInfo";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Certificates from "../components/resume/Certificates";
import Languages from "../components/resume/Languages";
import Achievements from "../components/resume/Achievements";
import TemplateSelector from "../components/resume/TemplateSelector";

import { downloadResume } from "../utils/pdfGenerator";

function resumeBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loadingAI, setLoadingAI] = useState(false);

  const { resumeData, setResumeData } = useContext(ResumeContext);

  const nextStep = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // ==========================
  // Save Resume
  // ==========================
  const saveResume = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/resumes",
        resumeData
      );

      alert("✅ Resume Saved Successfully");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to Save Resume");
    }
  };

  // ==========================
  // REAL AI Summary (Gemini)
  // ==========================
  const generateSummary = async () => {
    try {
      setLoadingAI(true);

      const response = await axios.post(
        "http://localhost:5000/api/ai/summary",
        {
          name: resumeData.personal.fullName,
          skills: resumeData.skills.join(", "),
        }
      );

      setResumeData({
        ...resumeData,
        personal: {
          ...resumeData.personal,
          summary: response.data.summary,
        },
      });

      alert("✅ AI Summary Generated Successfully");
    } catch (error) {
      console.error(error);
      alert("❌ AI Summary Generation Failed");
    } finally {
      setLoadingAI(false);
    }
  };

  return (
    <div className="bg-blue-950 min-h-screen text-white p-8">

      <div className="flex gap-8">

        <resumesidebar currentStep={currentStep} />

        <div className="flex-1">

          <TemplateSelector />

          <ProgressBar currentStep={currentStep} />

          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <Education />}
          {currentStep === 3 && <Experience />}
          {currentStep === 4 && <Skills />}
          {currentStep === 5 && <Projects />}
          {currentStep === 6 && <Certificates />}
          {currentStep === 7 && <Languages />}
          {currentStep === 8 && <Achievements />}

          {currentStep === 9 && (
            <div className="bg-blue-900 rounded-2xl p-10 text-center">

              <h2 className="text-4xl font-bold mb-5">
                🎉 Resume Completed
              </h2>

              <p className="mb-6">
                Review your resume and download it.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">

                <button
                  onClick={saveResume}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
                >
                  💾 Save Resume
                </button>

                <button
                  onClick={generateSummary}
                  disabled={loadingAI}
                  className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg disabled:opacity-50"
                >
                  {loadingAI
                    ? "⏳ Generating..."
                    : "🤖 AI Generate Summary"}
                </button>

                <button
                  onClick={downloadResume}
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
                >
                  📄 Download PDF
                </button>

              </div>

            </div>
          )}

          <div className="flex justify-between mt-8">

            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg disabled:opacity-50"
            >
              ← Previous
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === 9}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg disabled:opacity-50"
            >
              Next →
            </button>

          </div>

        </div>

        <div className="w-[430px] sticky top-5">
          <ResumePreview />
        </div>

      </div>

    </div>
  );
}

export default resumeBuilder;