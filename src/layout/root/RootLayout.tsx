import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import Menu from "../../components/Menu/Menu";

const RootLayout = () => {
  return (
    <main className="font-display min-h-screen">
      <aside className="w-64 h-screen lg:fixed left-0 hidden lg:flex">
        <Sidebar />
      </aside>
      <section className="lg:ml-[20%]">
        <Menu />
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;
