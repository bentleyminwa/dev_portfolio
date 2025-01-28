import { Link } from "react-router-dom";
import { data } from "../../assets/data/data";

const year = new Date().getFullYear();

const Footer = () => {
  const { socials } = data;

  return (
    <footer className="flex flex-col items-end gap-4">
      <p className="text-xs text-gray-600">
        &copy; {year}{" "}
        <span className="text-gray-800 font-semibold">Minwa Bentley. </span>All
        rights reserved.
      </p>

      <ul className="flex gap-4 justify-end">
        {socials.map((social) => {
          return (
            <li
              key={social.name}
              className="hover:scale-110 transition duration-300 ease-in-out"
            >
              <Link
                to={social.path}
                target="blank"
                className="text-lg text-gray-700"
              >
                {social.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
