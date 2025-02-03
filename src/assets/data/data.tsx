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
        buttonText: "more about me!",
        buttonLink: "/about",
      },
    },
    {
      image: hero2,
      content: {
        heading: "Problem-Solving Through Code",
        description:
          "Every project I build is driven by purpose and intent to enhance user experience.",
        buttonText: "view my work!",
        buttonLink: "/work",
      },
    },
    {
      image: hero3,
      content: {
        heading: "Open to Opportunities",
        description:
          "I’m always looking for exciting opportunities to collaborate, learn, and grow.",
        buttonText: "contact me!",
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
      path: "https://www.github.com/",
      icon: <FaGithub />,
    },
    {
      name: "X",
      path: "https://x.com/",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
    },
  ],
  faqs: [
    {
      title: "My specialties",
      content:
        "We offer a 30-day money back guarantee if you are not satisfied with our product.",
    },
    {
      title: "What I Do",
      content:
        "Yes, we provide technical support to all customers during business hours.",
    },
    {
      title: "Why Choose Me?",
      content:
        "Yes, we offer a 30-day money back guarantee if you are not satisfied with our product.",
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
