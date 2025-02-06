import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { hero1, hero2, hero3, project1, project2 } from "../images";

export const data = {
  slides: [
    {
      image: hero1,
      content: {
        heading: "The Modern Web Developer",
        description:
          "I'm a passionate frontend software developer specializing in React and its ecosystem.",
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
      name: "Instagram",
      path: "https://www.instagram.com/",
      icon: <FaInstagram />,
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
        "My tech journey began in 2018 with the basics—HTML, CSS, and JavaScript—building simple websites and experimenting with styling and interactivity. As I grew more comfortable, I started exploring JavaScript deeply, which naturally led me to React. The component-based architecture and ecosystem fascinated me, pushing me to dive into state management, performance optimization, and modern frontend patterns.",
    },
    {
      title: "Tech Stack & Expertise",
      content:
        "My expertise lies in React and its ecosystem, where I build scalable, efficient, and user-friendly applications. I work extensively with TypeScript for type safety, Redux Toolkit and Jotai for state management, and TanStack Query for optimized data fetching. My styling approach is powered by TailwindCSS. For backend and authentication, I leverage Firebase, ensuring seamless user management and real- time data handling.",
    },
    {
      title: "Why Work with Me?",
      content:
        "I bring a problem-solving mindset, attention to detail, and a strong passion for building intuitive web applications. Whether it’s crafting seamless user experiences, optimizing performance, or managing complex state, I focus on delivering high-quality, scalable solutions. If you're looking for someone who is dedicated, adaptable, and committed to writing clean, maintainable code, I’d love to collaborate!",
    },
    {
      title: "What I am Currently Working On",
      content:
        "Right now, I’m actively developing QuickBites, a food order management system. This project allows me to refine my skills in React, TypeScript, Jotai, and TanStack Query, while also exploring better ways to manage state and optimize performance. Additionally, I’m sharpening my understanding of backend technologies to become a more well-rounded developer.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Trivio",
      img: project1,
      techs: ["React", "Typescript", "Tailwind", "Framer Motion"],
      url: "https://trivio3.netlify.app/",
      code: "https://github.com/bentleyminwa/trivio",
    },
    {
      id: 2,
      title: "Lithium3",
      img: project2,
      techs: ["React", "Typescript", "ContextAPI", "Tailwind", "Framer Motion"],
      url: "https://lithium3.netlify.app/",
      code: "https://github.com/bentleyminwa/lithium",
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
