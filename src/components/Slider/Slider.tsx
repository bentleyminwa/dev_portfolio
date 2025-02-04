import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { data } from "../../assets/data/data";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const { slides } = data;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.content.heading}
            className="w-full h-[91vh] object-cover object-center"
          />
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={index === currentIndex ? "visible" : "hidden"}
            className="absolute bottom-30 md:bottom-10 md:left-10 z-30 bg-white p-10 shadow-lg space-y-4 mx-4"
          >
            <h1 className="text-3xl md:text-4xl tracking-wide">
              {slide.content.heading}
            </h1>
            <p className="text-sm md:text-base text-gray-500 tracking-wider">
              {slide.content.description}
            </p>
            <button
              onClick={() => navigate(slide.content.buttonLink)}
              className="border p-3 cursor-pointer text-xs uppercase tracking-widest flex justify-center items-center gap-1 group"
            >
              <span className="group-hover:gap-2">
                {slide.content.buttonText}
              </span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
