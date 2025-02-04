import { motion } from "framer-motion";
import { data } from "../../assets/data/data";

const formVariants = {
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

const infoVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const Contact = () => {
  const { contactInfos } = data;

  return (
    <main className="pt-36 md:pt-20 px-10">
      <h5 className="uppercase text-[10px] text-gray-500 tracking-[4px] mb-5">
        how to reach me
      </h5>
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="uppercase text-xl tracking-[4px] mb-20"
      >
        Get in Touch
      </motion.h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="border border-gray-200 p-4"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border border-gray-200 p-4"
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="border border-gray-200 p-4"
          />
          <textarea
            name="message"
            placeholder="message"
            className="border border-gray-200 p-4 min-h-[150px]"
          />
          <button className="self-start px-4 py-2 uppercase text-sm text-white bg-black cursor-pointer tracking-widest hover:bg-gray-800">
            send message
          </button>
        </motion.form>
        <div>
          <motion.ul variants={infoVariants} initial="hidden" animate="visible">
            {contactInfos.map(({ icon, title, value }) => (
              <li key={title} className="flex items-center gap-5 mb-10">
                <span className="bg-gray-200 p-10 text-xl">{icon}</span>
                <span className="text-sm tracking-wide flex-1">{value}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </main>
  );
};

export default Contact;
