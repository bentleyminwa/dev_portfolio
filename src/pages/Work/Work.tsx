import { motion } from "framer-motion";
import { FaCode, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { data } from "../../assets/data/data";
import { Banner } from "../../components";

const hoverVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.9, transition: { duration: 0.3 } },
};

const Work = () => {
  const { projects } = data;

  return (
    <main className="pt-20">
      <h5 className="uppercase text-[10px] text-gray-500 tracking-[4px] mb-5">
        portfolio
      </h5>
      <h2 className="uppercase text-xl tracking-[4px] mb-20">My Work</h2>
      <section className="grid grid-cols-2 gap-10 w-full pr-10 mb-32">
        {projects.map(({ id, img, title, techs, url, code }) => (
          <div
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
          </div>
        ))}
      </section>
      <section>
        <Banner />
      </section>
    </main>
  );
};

export default Work;
