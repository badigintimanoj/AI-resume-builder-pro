import { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {

  const [resumeData, setResumeData] = useState({

selectedTemplate: "ATS",

    personal: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      portfolio: "",
      summary: "",
    },

    education: [{
    college: "",
    degree: "",
    branch: "",
    cgpa: "",
    startYear: "",
    endYear: "",
  },],

    experience: [{
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  },],

    skills: ["Skills"],

    projects: [ {
    title: "",
    tech: "",
    github: "",
    live: "",
    description: "",
  },],

    certificates: [{
    name: "",
    issuer: "",
    year: "",
    link: "",
  },],

    languages: ["Language"],

    achievements: ["Achievement"],

  });

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};