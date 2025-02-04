import { motion } from "framer-motion";
import { lee } from "../../assets/images";
import { Accordion, Banner } from "../../components";

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
    <main className="pt-36 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        <motion.section
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          className=""
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
        <section className="w-full mb-10">
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            src={lee}
            alt=""
            className="shadow-xl rounded-3xl"
          />
        </section>
      </div>
      <Banner />
    </main>
  );
};

export default About;
