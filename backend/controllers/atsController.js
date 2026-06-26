const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.checkATS = async (req, res) => {
  try {
    const { resume, job } = req.body;

    const prompt = `
You are an ATS Resume Checker.

Compare the following resume with the job description.

Resume:
${resume}

Job Description:
${job}

Rules:
1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT wrap the response inside \`\`\`.
4. Do NOT add explanations.
5. Score should be between 0 and 100.

Expected JSON format:

{
  "score": 85,
  "missingSkills": [
    "React",
    "Docker"
  ],
  "suggestions": [
    "Add React projects",
    "Mention Docker experience",
    "Improve professional summary"
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text.trim();

    // Remove markdown if Gemini accidentally returns it
    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");
    text = text.trim();

    res.json({
      success: true,
      result: text,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "ATS Check Failed",
    });
  }
};