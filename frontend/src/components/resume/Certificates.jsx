import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Certificates() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const certificate = resumeData.certificates[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData({
      ...resumeData,
      certificates: [
        {
          ...certificate,
          [name]: value,
        },
      ],
    });
  };

  return (
    <div className="bg-blue-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="name"
          placeholder="Certificate Name"
          value={certificate.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="issuer"
          placeholder="Issued By"
          value={certificate.issuer}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="year"
          placeholder="Year"
          value={certificate.year}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          name="link"
          placeholder="Credential Link"
          value={certificate.link}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black"
        />

      </div>

    </div>
  );
}

export default Certificates;