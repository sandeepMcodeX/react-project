import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";

const navLinks = [
  {
    id: 1, // id problem id :1
    name: "Software Team",
  },
  {
    id: 2,
    name: "Services",
  },
  {
    id: 3,
    name: "Technologies",
  },
  {
    id: 4,
    name: "Resources",
  },
  {
    id: 5,
    name: "Company",
  },
];

const Header = () => {
  

  return (
    <header className="bg-white w-full  shadow-sm  sticky top-0 font-sans z-1000">
      <div className=" max-w-7xl mx-auto px-6 md:px-2 py-4 flex  gap-10 xl:gap-16 items-center justify-between  ">
        {/* logo */}
        <div className="flex gap-2 items-center">
          <img className="w-8 h-8" src={Logo} alt="logo" />
          <h1 className="text-2xl font-bold text-black">Logoipsum</h1>
        </div>
        {/* Links */}
        <ul className="hidden lg:flex  gap-8 text-md xl:text-xl">
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={"#"}
                className="hover:text-blue-600 duration-300 ease-in-out"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className=" hidden md:flex items-center gap-2 border border-black-400 px-2 xl:px-5 py-3 text-md  rounded-md cursor-pointer hover:bg-blue-50">
          <span>Get in Touch</span>
          <ArrowUpRight size={14} />
        </button>

        {/* Menu Bar  */}
        <button className="flex md:hidden">
          <Menu className="w-5 h-5" />
        </button>

      </div>
    </header>
  );
};

export default Header;
