import { Footer, Links, Logo } from "./index";

const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between items-end h-full pb-20">
      <Logo />
      <Links />
      <Footer />
    </nav>
  );
};

export default Sidebar;
