const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct", // or llama-3, claude-3, etc.
        messages: messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000", // your domain or localhost
          "X-Title": "Rakesh Portfolio AI Bot"
        },
      }
    );

    const reply = response.data?.choices[0]?.message?.content || "No response.";
    res.json({ reply });
  } catch (err) {
    console.error("❌ OpenRouter Error:", err.response?.data || err.message);
    res.status(500).json({ error: "OpenRouter API failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
