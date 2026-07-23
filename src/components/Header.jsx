import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    name: "Software Team",
    path: "/software",
  },
  {
    id: 2,
    name: "Services",
    path: "/Services",
  },
  {
    id: 3,
    name: "Technologies",
    path: "/technologies",
  },
  {
    id: 4,
    name: "Resources",
    path: "/resources",
  },
  {
    id: 5,
    name: "Company",
    path: "/company",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white w-full  shadow-sm  sticky top-0 font-sans z-1000">
      <div className=" max-w-7xl mx-auto px-6 md:px-2 py-4 flex  gap-10 xl:gap-16 items-center justify-between  ">
        {/* logo */}
        <div className="flex gap-2 items-center cursor-pointer " onClick={() => navigate("/")}>
          <img
            className="w-8 h-8"
            src={Logo}
            alt="logo"
            
          />
          <h1 className="text-2xl font-bold text-black">Logoipsum</h1>
        </div>
        {/* Links */}
        <ul className="hidden lg:flex  gap-8 text-md xl:text-xl">
          {navLinks.map(({ id, name, path }) => (
            <li key={id}>
              <NavLink
                to={path}
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
        <button className="flex md:hidden" onClick={handleMenuBar}>
          <Menu className="w-5 h-5" />
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 bg-white w-full  sm:py-4 py-6 px-6 ">
            <div className="flex flex-col gap-6  ">
              <div className="flex justify-between items-center ">
                <div
                  className="flex gap-2 items-center"
                  onClick={() => navigate("/")}
                >
                  <img className="w-8 h-8" src={Logo} alt="logo" />
                  <h1 className="text-2xl font-bold text-black">Logoipsum</h1>
                </div>
                <button onClick={handleMenuBar}>
                  <X />
                </button>
              </div>

              <ul className=" flex flex-col   gap-3 text-md xl:text-xl px-2  ">
                {navLinks.map(({ id, name, path }) => (
                  <li key={id}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        ` block px-4 py-3 rounded-lg border-2 border-gray-50 ${isActive ? "bg-gray-100 text-blue-400" : "bg-white"}
                        `
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
