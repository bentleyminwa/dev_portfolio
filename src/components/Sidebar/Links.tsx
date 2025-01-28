import { NavLink } from "react-router-dom";
import { data } from "../../assets/data/data";

const Links = () => {
  const { navlinks } = data;

  return (
    <nav>
      <ul className="flex flex-col items-end gap-6 uppercase text-gray-400 text-xs font-semibold">
        {navlinks.map((link, index) => (
          <li
            key={index}
            className="hover:text-gray-900 tracking-widest transition duration-300 ease-in-out"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-gray-900 border-b border-b-gray-900 pb-1" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
