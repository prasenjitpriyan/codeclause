import { FC } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/A.jpg";
import { Linktype } from "../vite-env";

const Navbar: FC = () => {
  let links: Linktype[] = [
    { id: Math.random(), link: "/", name: "Home" },
    { id: Math.random(), link: "/about", name: "About" },
    { id: Math.random(), link: "/pricing", name: "Pricing" },
    {
      id: Math.random(),
      link: "/downloadApp",
      name: "Download App",
    },
    { id: Math.random(), link: "/contact", name: "Contact" },
  ];

  const location = useLocation();

  return (
    <header className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 p-5">
      <div>
        <img src={logo} alt="Logo" className="w-[50px]" />
      </div>
      <nav className="flex justify-center items-center">
        <div className="flex flex-row justify-between gap-10">
          {links.map(({ id, link, name }) => (
            <Link
              key={id}
              to={link}
              className={
                location.pathname === link
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex flex-row justify-end gap-5">
        <button className="bg-gradient-to-r from-[#8A66D9] via-[#4054C0] to-[#134DB1] p-3 rounded-xl text-white w-40 hover:bg-gradient-to-l">
          Sign In
        </button>
        <button className="bg-gradient-to-r from-[#F2CB57] via-[#F29C50] to-[#F2884B] p-3 rounded-xl text-white w-40 hover:bg-gradient-to-l">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
