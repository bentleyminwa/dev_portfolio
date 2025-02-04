import Hamburger from "hamburger-react";

const Menu = () => {
  return (
    <div className="fixed z-50 top-10 left-10 md:hidden">
      <Hamburger />
    </div>
  );
};

export default Menu;
