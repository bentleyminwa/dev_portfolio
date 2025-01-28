import { Footer, Links, Logo } from "./index";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-end h-full py-10">
      <div className="space-y-20">
        <Logo />
        <Links />
      </div>

      <Footer />
    </div>
  );
};

export default Sidebar;
