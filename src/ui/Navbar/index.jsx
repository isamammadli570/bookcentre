import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";
import { CartContext } from "../../context/ContextProvider";
import { HiBars3BottomRight } from "react-icons/hi2";

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
    name: "Best Selling",
    link: "/#best",
  },
  {
    name: "Trending Books",
    link: "/#top",
  },
  {
    name: "About",
    link: "/#about",
  },
];

function Navbar({ isOpen, setIsOpen }) {
  const { cart } = useContext(CartContext);
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
            <Link className="flex" to="/cart">
              <FaCartShopping />
              <sup className="mt-1 text-yellow-900">{`${cart.length}`}</sup>
            </Link>
            <div>
              {!isOpen && (
                <HiBars3BottomRight
                  onClick={() => setIsOpen((open) => !open)}
                  className={` md:hidden text-2xl cursor-pointer`}
                />
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
