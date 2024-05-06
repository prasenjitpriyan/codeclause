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
    <header className="p-5 grid sm:grid-cols-12 gap-5">
      <div className="sm:col-span-2 flex justify-center sm:justify-start">
        <img src={logo} alt="Logo" className="w-[30px] sm:w-[50px]" />
      </div>
      <div className="flex justify-evenly sm:col-span-7">
        <div className="flex gap-2 sm:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 justify-evenly items-center text-[14px] sm:text-[18px]">
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
      </div>
      <div className="sm:col-span-3">
        <div className="flex justify-center sm:justify-end">
          <button className="bg-gradient-to-r from-[#F2CB57] via-[#F29C50] to-[#F2884B] p-1 sm:p-3 rounded-xl text-white w-32 hover:bg-gradient-to-l">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
