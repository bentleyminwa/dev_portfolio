import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { hero1, hero2, hero3, project1, project2, project3 } from "../images";

export const data = {
  slides: [
    {
      image: hero1,
      content: {
        heading: "The Modern Software Engineer",
        description:
          "Software Engineer with experience building full-stack web applications from idea to production.",
        buttonText: "more about me",
        buttonLink: "/about",
      },
    },
    {
      image: hero2,
      content: {
        heading: "Problem-Solving Through Code",
        description:
          "Every project I build is driven by purpose and intent to enhance user experience.",
        buttonText: "view my work",
        buttonLink: "/work",
      },
    },
    {
      image: hero3,
      content: {
        heading: "Open to Opportunities",
        description:
          "I’m always looking for exciting opportunities to collaborate, learn, and grow.",
        buttonText: "contact me",
        buttonLink: "/contact",
      },
    },
  ],
  navlinks: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "about",
      name: "About",
    },
    {
      path: "work",
      name: "Work",
    },
    {
      path: "contact",
      name: "Contact",
    },
  ],
  socials: [
    {
      name: "Github",
      path: "https://github.com/bentleyminwa",
      icon: <FaGithub />,
    },
    {
      name: "X",
      path: "https://x.com/Minwa_Bentley",
      icon: <FaXTwitter />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/bentley-minwa/",
      icon: <FaLinkedin />,
    },
  ],
  faqs: [
    {
      title: "My Journey into Tech",
      content:
        "My journey into tech has been driven by curiosity and a desire to build practical solutions. I started by learning the fundamentals, then grew through real-world experience by working in production environments and building full-stack products from the ground up.",
    },
    {
      title: "Tech Stack & Expertise",
      content:
        "I work primarily with React, TypeScript, and Next.js to build scalable, user-focused web applications, supported by Node.js, PostgreSQL, and Prisma on the backend. I have experience delivering production-ready features, integrating APIs, and designing clean, maintainable systems.",
    },
    {
      title: "Why Work with Me?",
      content:
        "I take ownership of what I build, care about clean and maintainable code, and work closely with others to ship reliable products that users actually enjoy. I combine strong engineering fundamentals with a product mindset, focusing on building scalable solutions that solve real business problems and deliver measurable value.",
    },
    {
      title: "What I am Currently Working On",
      content:
        "I’m currently working on Zira UI, a component library designed to support scalable frontend applications. It emphasizes reusable components, clean APIs, and maintainable styling to improve development efficiency and UI consistency.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Eclipser AI Assistant",
      img: project1,
      techs: ["React", "Javascript", "Google GenAI"],
      url: "https://eclipser-ten.vercel.app/",
      code: "https://github.com/bentleyminwa/eclipser_ai_assistant",
    },
    {
      id: 2,
      title: "Zira Homes Client",
      img: project2,
      techs: ["React", "Typescript", "Tailwind", "Framer Motion", "ShadcnUI"],
      url: "https://zira-homes-client.vercel.app/",
      code: "https://github.com/bentleyminwa/Zira-PMS-Client",
    },
    {
      id: 3,
      title: "Zira Homes Admin",
      img: project3,
      techs: ["ReactJs", "Typescript", "NextJs", "Tailwind", "Supabase", "Prisma ORM", "ShadcnUI"],
      url: "https://zira-homes-pm.vercel.app/",
      code: "https://github.com/bentleyminwa/Zira-Property-Management-System",
    },
  ],
  contactInfos: [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "bentleyminwa@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+254 743 053 331",
    },
    {
      icon: <FaMap />,
      title: "Location",
      value: "Nairobi, Kenya",
    },
  ],
};
