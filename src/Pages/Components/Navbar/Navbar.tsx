import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export interface Inavitem {
  item: string;
  link: string;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem: Inavitem[] = [
    { item: "خانه", link: "/commond-pro/" },
    { item: "درباره ما", link: "/commond-pro/Aboutus" },
    { item: "خدمات", link: "/commond-pro/OurServices" },
    { item: "پروژه ها", link: "/commond-pro/OurProjects" },
    { item: "تماس با ما", link: "/commond-pro/ContactUs" },
  ];

  return (
    <nav className="relative">
      <div className="lg:flex hidden  justify-between flex-row-reverse p-4">
        <button className="text-yellow-900 font-black border-2 w-[80px] h-[48px] mt-2 rounded-lg p-1">
          مشاوره
        </button>
        <ul className="lg:flex hidden gap-4 flex-row justify-center">
          {navItem.map((elem) => (
            <li key={elem.link} className="px-3 py-1 rounded">
              <Link to={elem.link}>{elem.item}</Link>
            </li>
          ))}
        </ul>

        <img src="Images/logo.png" alt="logo" className="w-[72px] h-[72px] " />
      </div>

      <div className="lg:hidden flex justify-between flex-row-reverse items-center p-4 bg-gray-300">
        <div className="text-xl font-bold">لوگو</div>
        <div className="flex gap-3">
          <button className="text-2xl" onClick={() => setOpen((elem) => !elem)}>
            <GiHamburgerMenu />
          </button>
          <button className="text-yellow-900 mb-1 font-black border-2 w-[85px] mt-2 rounded-lg p-1">
            مشاوره
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-300 z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* دکمه ضربدر */}
        <div className="flex justify-end p-4">
          <button className="text-2xl font-bold" onClick={() => setOpen(false)}>
            <IoMdCloseCircle />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          {navItem.map((elem) => (
            <li key={elem.link} className="px-3 py-2 rounded text-right">
              <Link to={elem.link} onClick={() => setOpen(false)}>
                {elem.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
