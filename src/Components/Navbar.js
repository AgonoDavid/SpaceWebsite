import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../images/logo.svg";

import MenuOpen from "../images/hamburger-open.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between  py-8 px-7">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
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
            <ul className="MENU-LINK-MOBILE-OPEN  flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Destination">Destination</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Crew">Crew</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Technology">Technology</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Destination">Destination</Link>
          </li>
          <li>
            <Link to="/Crew">Crew</Link>
          </li>
          <li>
            <Link to="/Technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
// export default function NavBar() {
//   const [navbar, setNavbar] = useState(false);

//   return (
//     <nav className="w-full nav-bg pb-10 shadow relative">
//       <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 relative">
//         <div>
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             <a href="javascript:void(0)">
//               <h2 className="text-2xl font-bold">LOGO</h2>
//             </a>
//             <div className="md:hidden absolute top-0 right-0">
//               <button
//                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               navbar ? "block" : "hidden"
//             } absolute top-0 right-0 md:relative nav-bg p-0`}
//           >
//             <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//               <li className="text-gray-600 hover:text-blue-600">
//                 <a href="javascript:void(0)">Home</a>
//               </li>
//               <li className="text-gray-600 hover:text-blue-600">
//                 <a href="javascript:void(0)">Blog</a>
//               </li>
//               <li className="text-gray-600 hover:text-blue-600">
//                 <a href="javascript:void(0)">About US</a>
//               </li>
//               <li className="text-gray-600 hover:text-blue-600">
//                 <a href="javascript:void(0)">Contact US</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
