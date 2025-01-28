import { Link } from "react-router-dom";
import { data } from "../../assets/data/data";

const year = new Date().getFullYear();

const Footer = () => {
  const { socials } = data;

  return (
    <footer className="flex flex-col items-end gap-4">
      <p className="text-xs text-gray-600">
        &copy; {year} All rights reserved.
      </p>

      <ul className="flex gap-4 justify-end">
        {socials.map((social) => {
          return (
            <li key={social.name}>
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
