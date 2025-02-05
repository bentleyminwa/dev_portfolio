import { motion } from "framer-motion";
import { FaCode, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { data } from "../../assets/data/data";
import { Banner } from "../../components";

const hoverVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.9, transition: { duration: 0.3 } },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
    },
  },
};

const Work = () => {
  const { projects } = data;

  return (
    <main className="pt-36 lg:pt-20">
      <h5 className="uppercase text-[10px] text-gray-500 tracking-[4px] mb-5 px-10 lg:px-0">
        portfolio
      </h5>
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="uppercase text-xl tracking-[4px] mb-20 px-10 lg:px-0"
      >
        My Work
      </motion.h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full px-10 lg:px-0 mb-32">
        {projects.map(({ id, img, title, techs, url, code }) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            key={id}
            className="relative w-full h-[60vh] cursor-pointer group border border-gray-200"
          >
            <img src={img} alt={title} className="w-full h-full object-cover" />
            <motion.div
              variants={hoverVariants}
              initial="hidden"
              whileHover="visible"
              className="absolute top-0 left-0 w-full h-full bg-black p-5"
            >
              <h4 className="text-white uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="flex items-center gap-4 text-gray-400 text-sm">
                {techs.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 p-5 text-white flex items-center justify-center gap-5">
                <Link
                  to={url}
                  target="_blank"
                  className="flex justify-center items-center gap-1 border-b border-dotted pb-1 hover:text-gray-300"
                >
                  <span>
                    <FaEye />
                  </span>
                  <span className="text-sm ">Preview</span>
                </Link>
                <Link
                  to={code}
                  target="_blank"
                  className="flex justify-center items-center gap-1 border-b border-dotted pb-1 hover:text-gray-300"
                >
                  <span>
                    <FaCode />
                  </span>
                  <span className="text-sm">Source Code</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>
      <section>
        <Banner />
      </section>
    </main>
  );
};

export default Work;
