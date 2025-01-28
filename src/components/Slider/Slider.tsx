import { useEffect, useState } from "react";
import { data } from "../../assets/data/data";

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slides } = data;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-x-hidden font-display">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.content.heading}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-10 left-10 z-50 bg-white p-10 shadow-lg space-y-4">
            <h1 className="text-4xl">{slide.content.heading}</h1>
            <p className="text-xl text-gray-500">{slide.content.description}</p>
            <button className="border p-3 hover:bg-gray-50 cursor-pointer">
              {slide.content.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
