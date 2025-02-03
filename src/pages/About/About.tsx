import { motion } from "framer-motion";
import { aboutPic, lee } from "../../assets/images";
import { Accordion, Banner } from "../../components";

const heroVaraints = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
    },
  },
};

const aboutVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
    },
  },
};

const About = () => {
  return (
    <main className="pt-20">
      <div className="min-h-screen grid grid-cols-2 gap-5">
        <section className="relative w-full h-full">
          <motion.img
            variants={heroVaraints}
            initial="hidden"
            animate="visible"
            src={aboutPic}
            alt="About"
            className="w-3/4  h-3/4 object-cover"
          />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            src={lee}
            alt=""
            className="absolute top-[10%] right-0 w-2/3 shadow-xl"
          />
        </section>
        <motion.section
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          className="px-8"
        >
          <h5 className="uppercase text-[10px] text-gray-500 tracking-[4px] mb-4">
            welcome to my portfolio
          </h5>
          <h2 className="uppercase text-xl tracking-[4px] mb-8">
            Hi! My name is Minwa Bentley
          </h2>
          <p className="text-sm text-gray-600 tracking-wide leading-7">
            I am a software developer with a knack for crafting dynamic and
            user-friendly web experiences. I love the process of transforming
            ideas into functional, visually appealing interfaces that people
            enjoy using.
          </p>

          <Accordion />
        </motion.section>
      </div>

      <Banner />
    </main>
  );
};

export default About;
