import { motion } from "framer-motion";
import { data } from "../../assets/data/data";
import { headingVariants, infoVariants } from "../../utils/motion";
import FormComponent from "./FormComponent";

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
        <FormComponent />
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
