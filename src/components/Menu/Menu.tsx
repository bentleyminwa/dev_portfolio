import Hamburger from "hamburger-react";

const Menu = () => {
  return (
    <div className="fixed z-50 top-0 left-0 md:hidden bg-white w-full px-10 py-5">
      <Hamburger />
    </div>
  );
};

export default Menu;
