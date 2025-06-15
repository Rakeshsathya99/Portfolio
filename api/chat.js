import axios from "axios";

const aboutMe = {
  summary: "Rakesh S is a passionate React developer with experience in building modern web applications. He specializes in React, TypeScript, and UI/UX design.",
  link: "/about",
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
  link: "/projects"
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
  description: "Rakesh S has earned industry-recognized certifications in front-end development, cloud computing, and agile project management."
};
const contact = {
  email: "srakeshshetty7@gmail.com",
  link: "/contact#/contact",
};

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

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Only POST allowed");

  const { messages } = req.body;
  const userMsg = messages && messages.length ? messages[messages.length - 1].content : "";
  const lowerMsg = userMsg.toLowerCase();

  // 1. About Me
  if (matchAbout(lowerMsg)) {
    return res.json({
      reply: `**About Rakesh S**\n\n${aboutMe.summary}\n\n[Learn more](${aboutMe.link})`,
      navigateTo: aboutMe.link
    });
  }

  // 2. Skills
  if (matchSkills(lowerMsg)) {
    return res.json({
      reply: `**Skills**\n\n- React\n- React Native\n- HTML/CSS\n- Tailwind CSS\n- JavaScript\n- Node.js\n- ExpressJS\n- Spring Boot\n- MySQL\n- MongoDB\n- Java\n- C\n- C++\n- AWS\n- RPA\n- Cross-Platform Development\n\n[See all skills](/about#skills)`,
      navigateTo: "/about#skills"
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

  // 6. Fallback: OpenRouter AI
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
          "HTTP-Referer": "https://portfolio-git-main-rakesh-ss-projects-8829e296.vercel.app/",
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
