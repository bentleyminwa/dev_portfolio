import { motion } from "framer-motion";
import { Footer, Links, Logo } from "./index";

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Sidebar = () => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="h-full flex flex-col justify-between items-end py-10 overflow-hidden space-y-10"
    >
      <div className="space-y-20">
        <Logo />
        <Links />
      </div>

      <Footer />
    </motion.div>
  );
};

export default Sidebar;
