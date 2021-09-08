import React from "react";
import Link from "next/link";
import { navItems } from "../../utils/constants";

function Header() {
  return (
  <nav className="flex bg-red-700 flex-wrap items-center justify-between p-4 pl-28">
      <div class="Name">
        <a className="text-xl text-white font-semibold font-heading" href="#">
          Kamakhya Marketing
        </a>
      </div>
      <MenuButton />
      <HeaderItems />
    </nav>
  );
}

const MenuButton = () => {
  return (
    <div className="block lg:hidden">
      <button className="navbar-burger flex items-center py-2 px-3  rounded border border-indigo-500">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
  );
};

function HeaderItems() {
  return (
    <div className="navbar-menu text-right">
      {navItems.map((item, index) => {
        return (
          <Link href={item.link}>
            <a
              key={index}
              className="block cursor-pointer lg:inline-block mt-4 lg:mt-0 mr-10 text-white"
            >
              {item.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default Header;
