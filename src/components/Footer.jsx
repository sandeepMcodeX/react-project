import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const footerData = [
  { 
    id:1,
    title: "Quick Links",
    links: [

      { id:1,  name: "Software Team", href: "#" },
      {  id :2 , name: "Technologies", href: "#" },
      { id:3 ,name: "Resources", href: "#" },
      { id:4 , name: "Company", href: "#" },
      { id:5, name: "Contact Us", href: "#" },
      {  id:6 ,name: "FAQ", href: "#" },
    ],
  },
  {
    id:2,
    title: "Services",
    links: [
      { id:1, name: "Dedicated Development", href: "#" },
      { id:2,  name: "Staff Augmentation Services", href: "#" },
      { id:3 ,name: "Software Development", href: "#" },
      { id:4 , name: "Development Center", href: "#" },
    ],
  },
  { id:3,
    title: "Contact US",
    links: [
      { id:1, name: "Envoto, Level 13, 2 Elizabeth Victoria 3000 India", href: "#" },
      { id:2 , name: "+91 881 944 1176", href: "#" },
      { id:3 , name: "ezyoga@gmail.com", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-black text-white ">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6  py-8 md:py-1 lg:py-8 ">
        <div className="flex flex-col lg:flex-row  gap-10 ">
          <div className="space-y-4 text-center md:text-left  lg:max-w-50 xl:max-w-60">
            <div className="flex flex-col items-center lg:flex-row  gap-2 ">
              <img className="w-8 h-8" src={Logo} alt="logo" />
              <h1 className="text-2xl font-bold ">Logoipsum</h1>
            </div>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              culpa beatae aspernatur
            </p>
            <div className="flex justify-center pt-4 gap-2">
              <ul className="flex gap-3  ">
                <li>
                  <Link>
                    <SlSocialFacebook className="w-5 h-5" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaXTwitter className="w-5 h-5"/>
                  </Link>
                </li>
                <li>
                  <Link>
                    <IoLogoLinkedin className="w-5 h-5" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
            {footerData.map(({ id, title, links  }) => (
              <div className="mb-5 md:mb-4" key={id}>
                <h3 className="text-xl md:text-2xl mb-5 md:mb-4 font-semibold  text-[#ffffff]">
                  {title}
                </h3>
                <ul className="space-y-1 md:space-y-2">
                  {links.map(({id , name, href }) => (
                    <li key={id}>
                      <Link
                        href={href}
                        className="text-[#c4c4c4] hover:text-blue-600 transition-colors text-sm md:text-base block px-2 md:px-0 py-1"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
