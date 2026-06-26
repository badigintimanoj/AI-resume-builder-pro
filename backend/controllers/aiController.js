const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.generateSummary = async (req, res) => {
  try {
    const { name, skills } = req.body;

    const prompt = `
You are an expert ATS Resume Writer.

Generate ONLY ONE professional resume summary.

Rules:
- Maximum 70 words.
- No headings.
- No bullet points.
- No options.
- No markdown.
- No bold text.
- No explanation.
- Return plain text only.

Candidate Name: ${name}
Skills: ${skills}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      summary: response.text.trim(),
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "AI Generation Failed",
    });
  }
};