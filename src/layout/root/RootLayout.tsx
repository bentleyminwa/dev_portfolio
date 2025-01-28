import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

const RootLayout = () => {
  return (
    <main className="font-display min-h-screen">
      <aside className="w-64 h-screen fixed left-0">
        <Sidebar />
      </aside>
      <section className="ml-[20%]">
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;
