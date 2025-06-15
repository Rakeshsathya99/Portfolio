import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Only POST allowed");

  const { messages } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://portfolio-git-main-rakesh-ss-projects-8829e296.vercel.app/", // your domain
          "X-Title": "Rakesh Portfolio Chatbot",
        },
      }
    );

    const reply = response.data?.choices[0]?.message?.content || "No response.";
    res.json({ reply });
  } catch (error) {
    console.error("❌ OpenRouter Error:", error.response?.data || error.message);
    res.status(500).json({ error: "OpenRouter API error" });
  }
}
