import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="fixed z-50 top-0 left-0 lg:hidden bg-white w-full px-10 py-5 shadow-sm">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
        <AnimatePresence mode="wait">{isOpen && <Sidebar />}</AnimatePresence>
      </div>
    </>
  );
};

export default Menu;
