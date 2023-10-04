// import logo from "./images/logo.svg";
// import line from "./images/line.png";

// import explore from "./images/explore.png";

import { Link } from "react-router-dom";

export default function Earth() {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between py-5 relative">
      <div className=" h-18 flex items-center" style={{ paddingLeft: "80px" }}>
        <img
          // src={logo}
          alt="logo"
        />
      </div>
      <div className="h-15  flex items-center  ">
        <img
          //   src={line}
          alt="line"
          className="absolute left-48 z-10 sm:hidden md:hidden lg:block"
        />
      </div>
      <div className="nav-bg  flex align-baseline absolute right-0">
        <div
          className="text-white w-full flex
             justify-between px-20 items-center nav-text "
        >
          <a href="" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">00</span> HOME
          </a>
          <Link to="/Destination" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">01</span> DESTINATION
          </Link>
          <a href="" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">02</span> CREW
          </a>
          <a href="" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">03</span> TECHNOLOGY
          </a>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="flex body w-full justify-between ">
      <div className="text-white w-full ">
        <h3 className="font-barslow text-3xl text-blue-200 pb-6 ">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-9xl pb-6 font-Belleflair">SPACE</h1>
        <p className="leading-9  text-blue-200  font-barslow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-full ">
        <img
          // src={explore}
          alt="explore"
          className="float-right w-52 sm:text-center "
        />
      </div>
    </div>
  );
}
