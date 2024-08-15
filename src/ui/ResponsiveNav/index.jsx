/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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

function ResponsiveNav({ setIsOpen }) {
  const toggleNavbar = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div data-aos="slide-left" data-aos-duration="200">
      <div className="flex gap-20 justify-center pt-10">
        <AiOutlineClose
          className="text-3xl cursor-pointer mt-6 font-semibold "
          onClick={() => setIsOpen((open) => !open)}
        />
      </div>
      <div className="flex flex-col mt-32 gap-10 items-center ">
        <ul className="text-center">
          {Menu.map((menu) => (
            <li className="p-6" key={menu.id}>
              <NavLink onClick={toggleNavbar} to={menu.link}>
                {menu.name}
              </NavLink>
            </li>
          ))}
          {DropdownLinks.map((links) => (
            <li className="p-6" key={links.name}>
              <a onClick={toggleNavbar} href={links.link}>
                {links.name}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-center text-sm text-zinc-500 mt-40">
            @copyright 2024 All rights reserved || Made with ❤️ by Isa Mammadli
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveNav;
