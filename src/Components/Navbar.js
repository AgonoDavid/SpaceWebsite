import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../images/logo.svg";
import line from "../images/line.png";

import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between  py-8 px-7">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className=" hidden lg:block">
        <img src={line} alt="line" />
      </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 text-3xl text-white"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <FiMenu />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 text-white"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-black-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN font-barslow text-white flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">00 Home</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Destination">01 Destination</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Crew">02 Crew</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-20 lg:flex text-white font-barslow  text-base nav-bg">
          <li>
            <Link to="/">00 Home</Link>
          </li>
          <li>
            <Link to="/Destination">01 Destination</Link>
          </li>
          <li>
            <Link to="/Crew">02 Crew</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
