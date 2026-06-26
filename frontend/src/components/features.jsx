import {
  FileText,
  Search,
  Sparkles,
  Download,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Sparkles size={35} />,
    title: "AI Resume Generator",
    desc: "Generate professional resumes using AI in seconds.",
  },
  {
    icon: <Search size={35} />,
    title: "ATS Score Checker",
    desc: "Analyze resume against job descriptions.",
  },
  {
    icon: <Download size={35} />,
    title: "PDF Export",
    desc: "Download resumes in high-quality PDF format.",
  },
  {
    icon: <Briefcase size={35} />,
    title: "Cover Letter",
    desc: "Generate AI-powered cover letters instantly.",
  },
  {
    icon: <FileText size={35} />,
    title: "Resume Templates",
    desc: "Choose from modern ATS-friendly templates.",
  },
  {
    icon: <ShieldCheck size={35} />,
    title: "AI Career Advisor",
    desc: "Get career suggestions based on your profile.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 px-10">
      <h2 className="text-5xl font-bold text-center mb-14">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-900 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-xl"
          >
            <div className="text-blue-400 mb-5">{feature.icon}</div>

            <h3 className="text-2xl font-bold mb-3">
              {feature.title}
            </h3>

            <p className="text-blue-200">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;