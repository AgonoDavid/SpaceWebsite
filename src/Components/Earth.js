import logo from "../images/logo.svg";
import line from "../images/line.png";
import Lottie from "lottie-react";
import animation from "../assets/explore.json";

import ReactTyped from "react-typed";

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
        <img src={logo} alt="logo" />
      </div>
      <div className="h-15  flex items-center  ">
        <img
          src={line}
          alt="line"
          className="absolute left-48 z-10 sm:hidden lg:block"
        />
      </div>
      <div className="nav-bg  flex align-baseline absolute right-0 ">
        <div
          className="text-white w-full flex
             justify-between px-20 items-center nav-text "
        >
          <Link to="" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">00</span> HOME
          </Link>
          <Link to="/Destination" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">01</span> DESTINATION
          </Link>
          <Link to="/Crew" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">02</span> CREW
          </Link>
          <Link to="" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">03</span> TECHNOLOGY
          </Link>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className=" lg:flex body  lg:w-full justify-between  sm: -mt-[-90px] ">
      <div className="text-white lg:w-2/5  lg:text-start  max-sm: w-80 sm: m-auto sm: text-center ">
        <h3 className="font-barslow lg:text-3xl sm: text-xl text-blue-200 lg: pb-6  ">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="lg:text-8xl pb-6 font-Belleflair sm: text-6xl">
          <ReactTyped strings={["SPACE?", "Let's Go!"]} typeSpeed={100} loop />
        </h1>
        <p className="lg:leading-9  sm:leading-8 text-blue-200  font-barslow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className=" lg:w-2/5 sm:w-full text-center sm:mt-6">
        <Lottie
          animationData={animation}
          className=" w-48 sm:w-full mx-auto "
        />
      </div>
    </div>
  );
}
