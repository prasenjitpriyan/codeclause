import { FC } from "react";
import logo from "../assets/A.jpg";
import { Linktypes } from "../vite-env";
import { Link } from "react-router-dom";

let links: Linktypes[] = [
  { id: Math.random(), link: "/", name: "Home" },
  { id: Math.random(), link: "/about", name: "About" },
  { id: Math.random(), link: "/pricing", name: "Pricing" },
  { id: Math.random(), link: "/downloadApp", name: "Download App" },
  { id: Math.random(), link: "/contact", name: "Contact" },
];

const Navbar: FC = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
