import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { data } from "../../assets/data/data";

const accordionVariants = {
  closed: {
    y: -10,
  },
  open: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const { faqs } = data;

  const handleExpand = (nextIndex: number) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderFaqs = faqs.map((faq, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span>{isExpanded ? <FaArrowUp /> : <FaArrowDown />}</span>;

    return (
      <div key={index} className="mb-2">
        <div
          className={`flex justify-between items-center cursor-pointer py-3 px-8 border ${
            isExpanded
              ? "bg-gray-900 border-gray-900 text-white"
              : "bg-gray-100 border-gray-200 text-black"
          }`}
          onClick={() => handleExpand(index)}
        >
          <h4 className="uppercase text-xs tracking-widest">{faq.title}</h4>
          <span className="text-xs">{icon}</span>
        </div>
        <div>
          {isExpanded && (
            <motion.div
              variants={accordionVariants}
              initial="closed"
              animate="open"
              className="mt-2 border border-gray-200 p-4 text-sm text-gray-600 tracking-wide leading-7"
            >
              {faq.content}
            </motion.div>
          )}
        </div>
      </div>
    );
  });

  return <div className="mt-10">{renderFaqs}</div>;
};

export default Accordion;
