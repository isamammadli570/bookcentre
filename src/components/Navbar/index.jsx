import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Books",
    link: "/books",
  },
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#top",
  },
  {
    name: "Best Selling",
    link: "/#top",
  },
  {
    name: "Authors",
    link: "/#",
  },
];

function Navbar({ handleOrderPopup }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center flex-wrap ">
          <div>
            <a href="/" className="font-bold text-2xl md:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Books
            </a>
          </div>
          <nav className="flex items-center justify-between gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="items-center hidden gap-2 md:flex">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <NavLink
                    to={menu.link}
                    className="inline-block 
                    py-4 
                    px-4
                    hover:text-primary 
                    duration-200"
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
              {/* acılan hisse */}
              <li className="group relative cursor-pointer ">
                <a href="/#" className="flex h-[72px] items-center gap[2px]">
                  Quick Links
                  <span className="transition duration-200 group-hover:rotate-180">
                    <FaCaretDown />
                  </span>
                </a>
                {/* acılan linkler */}
                <div className="absolute shadow-md -left-9 z-[10] hidden group-hover:block text-black bg-white p-2">
                  <ul>
                    {DropdownLinks.map((links) => (
                      <li key={links.name}>
                        <a
                          href={links.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {links.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button
              onClick={handleOrderPopup}
              className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300"
            >
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </nav>
          {isOpen && (
            <ul className="flex flex-col items-center basis-full p-10  ">
              {Menu.map((menu) => (
                <li className="p-5 " key={menu.id}>
                  <NavLink to={menu.link}>{menu.name}</NavLink>
                </li>
              ))}
              {DropdownLinks.map((links) => (
                <li className="p-5" key={links.name}>
                  <a href={links.link}>{links.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
