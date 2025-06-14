const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Helper: Get IST hour
function getISTHour() {
  const now = new Date();
  // IST is UTC+5:30
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 60 * 60 * 1000);
  return ist.getHours();
}

// Helper: Get greeting based on IST hour
function getISTGreeting() {
  const hour = getISTHour();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

// Mock data for portfolio
const aboutMe = {
  summary:
    "Rakesh S is a passionate React developer with experience in building modern web applications. He specializes in React, TypeScript, and UI/UX design.",
  link: "contact#/about",
};
const projects = {
  list: [
    {
      name: "Movie Ticket Booking App",
      description: "Online platform for movie ticket booking with real-time seat availability and movie reviews.",
      tech: "ReactJS, CSS, NodeJS, ExpressJS, MongoDB",
      link: "/projects#movie-ticket"
    },
    {
      name: "Bitcoin Trading Platform",
      description: "AI-powered crypto trading platform with real-time data from Gemini and Coin Gecko APIs.",
      tech: "React, Tailwind CSS, Spring Boot, MySQL, Spring Security",
      link: "/projects#bitcoin"
    },
    {
      name: "Movie Streaming App",
      description: "Web application for streaming movies and TV shows with internet-based access.",
      tech: "ReactJS, Tailwind CSS, NodeJS, ExpressJS, MongoDB",
      link: "/projects#streaming"
    }
  ],
  link: "/contact#/projects"
};
const certifications = {
  list: [
    "AWS Certified Cloud Practitioner",
    "Cloud Computing Foundations",
    "Automation Anywhere Certified Advanced RPA Professional (2024)",
    "Automation Anywhere Certified Essentials Automation Professional",
    "Automation Anywhere Certified Advanced RPA Professional",

  ],
  link: "/certifications",
  description: "Rakesh S has earned industry-recognized certifications in RPA development, cloud computing, and AWS Cloud, Web Development."
};
const contact = {
  email: "srakeshshetty7@gmail.com",
  link: "/contact#/contact",
};

// Keyword matchers
function matchGreeting(text) {
  return /\b(hello|hi|hey)\b/i.test(text);
}
function matchAbout(text) {
  return /\b(about( me)?|myself|who am i|who is rakesh|about rakesh)\b/i.test(text);
}
function matchProjects(text) {
  return /\b(projects?|my projects?)\b/i.test(text);
}
function matchCertifications(text) {
  return /\b(certifications?|my certifications?)\b/i.test(text);
}
function matchSkills(text) {
  return /\b(skills?|my skills?)\b/i.test(text);
}
function matchContact(text) {
  return /\b(contact|email|my email|how to contact)\b/i.test(text);
}
function matchTime(text) {
  return /time( now)?/i.test(text);
}

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  console.log("[DEBUG] Received messages:", messages);
  const userMsg = messages && messages.length ? messages[messages.length - 1].content : "";
  const lowerMsg = userMsg.toLowerCase();

  // 1. Time-based greeting
  if (matchGreeting(lowerMsg)) {
    const greeting = getISTGreeting();
    return res.json({
      reply: `${greeting}! How can I help you with Rakesh S's portfolio today?` +
        "\n\nYou can ask about: [About Me](/about), [Projects](/projects), [Certifications](/certifications), or [Contact](/contact)."
    });
  }

  // 2. About Me
  if (matchAbout(lowerMsg)) {
    return res.json({
      reply: `**About Rakesh S**\n\n${aboutMe.summary}\n\n[Learn more](${aboutMe.link})`,
      navigateTo: aboutMe.link
    });
  }

  // 2b. Skills
  if (matchSkills(lowerMsg)) {
    return res.json({
      reply: `**Skills**\n\n- React\n- React Native\n- HTML/CSS\n- Tailwind CSS\n- JavaScript\n- Node.js\n- ExpressJS\n- Spring Boot\n- MySQL\n- MongoDB\n- Java\n- C\n- C++\n- AWS\n- RPA\n- Cross-Platform Development\n\n[See all skills](/contact#/about)`,
      navigateTo: "/contact#/about"
    });
  }

  // 3. Projects
  if (matchProjects(lowerMsg)) {
    const projectList = projects.list.map(
      p => `### [${p.name}](${p.link})\n${p.description}\n_Tech:_ ${p.tech}\n`
    ).join("\n");
    return res.json({
      reply: `**Featured Projects**\n\n${projectList}\n[See all projects](${projects.link})`,
      navigateTo: projects.link
    });
  }

  // 4. Certifications
  if (matchCertifications(lowerMsg)) {
    const certList = certifications.list.map(c => `- ${c}`).join("\n");
    return res.json({
      reply: `**Certifications**\n\n${certifications.description}\n\n${certList}\n\n[View certifications](${certifications.link})`,
      navigateTo: certifications.link
    });
  }

  // 5. Contact
  if (matchContact(lowerMsg)) {
    return res.json({
      reply: `**Contact Rakesh S**\n\nEmail: [${contact.email}](mailto:${contact.email})\n\n[Contact Form](${contact.link})`,
      navigateTo: contact.link
    });
  }

  // 6. Time now
  if (matchTime(lowerMsg)) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const ist = new Date(utc + 5.5 * 60 * 60 * 1000);
    const timeStr = ist.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    return res.json({
      reply: `The current time (IST) is: **${timeStr}**`
    });
  }

  // 6b. Portfolio catch-all: prevent generic fallback for portfolio-related queries
  if (/\b(certification|project|about|skills?|contact|portfolio|rakesh)\b/i.test(lowerMsg)) {
    return res.json({
      reply: "I'm here to help you with Rakesh S's portfolio! Please use keywords like **about**, **projects**, **certifications**, **skills**, or **contact** to learn more about Rakesh S. You can also ask about specific skills or projects.",
      navigateTo: "/"
    });
  }

  // 7. Fallback: OpenRouter AI
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful and friendly assistant trained to guide users through Rakesh S's personal portfolio. Provide accurate details about his experience, projects, certifications, and guide users to the relevant sections of the website. Greet users based on the time. Answer general queries with helpful and factual responses.",
          },
          ...messages,
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Rakesh Portfolio AI Bot",
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
