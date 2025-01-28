import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

const RootLayout = () => {
  return (
    <main>
      <section>
        <Sidebar />
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;
