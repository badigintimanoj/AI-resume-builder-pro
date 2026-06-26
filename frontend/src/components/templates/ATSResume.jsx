function ATSResume({ resumeData }) {
  return (
    <div className="bg-white text-black p-8 rounded-xl">

      <h1 className="text-4xl font-bold">
        {resumeData.personal.fullName || "Your Name"}
      </h1>

      <p>{resumeData.personal.email}</p>
      <p>{resumeData.personal.phone}</p>

      <hr className="my-6"/>

      <h2 className="font-bold text-xl">
        Professional Summary
      </h2>

      <p>
        {resumeData.personal.summary}
      </p>

    </div>
  );
}

export default ATSResume;