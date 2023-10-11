import logo from "../images/logo.svg";
import line from "../images/line.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { MoonContent } from "./MoonContent";
import { MarsContent } from "./MarsContent";
import { EuropaContent } from "./EuropaContent";
import { TitansContent } from "./TitansContent";

export default function Destination() {
  const [update, setUpdate] = useState(1);

  return (
    <div className="Destination">
      <Navbar />
      <Text />
      <LoopThrough update={update} setUpdate={setUpdate} />

      <Body update={update} />
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
          className="absolute left-48 z-10 sm:hidden md:hidden lg:block"
        />
      </div>
      <div className="Destination-reg  flex align-baseline absolute right-0">
        <div
          className="text-white w-full flex
               justify-between px-20 items-center nav-text "
        >
          <Link to="/" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">00</span> HOME
          </Link>
          <a href="" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">01</span> DESTINATION
          </a>
          <Link to="/Crew" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">02</span> CREW
          </Link>
          <a href="" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">03</span> TECHNOLOGY
          </a>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <p className=" text-white font-barslow text-3xl Destination-body">
      <span className=" text-gray-600">01</span> Pick your destination
    </p>
  );
}

function Body({ update }) {
  return (
    <div className="Destination-body-content">
      {update === 1 ? <MoonContent /> : null}
      {update === 2 ? <MarsContent /> : null}
      {update === 3 ? <EuropaContent /> : null}
      {update === 4 ? <TitansContent /> : null}
    </div>
  );
}

function LoopThrough({ update, setUpdate }) {
  return (
    <div className="flex justify-between Destination-body-content gap-7 w-full">
      <div className=" w-2/5"></div>
      <div className=" w-2/5 flex justify-between ">
        <button
          onClick={() => setUpdate(1)}
          className={`planet-button ${update === 1 ? "tested" : ""} `}
        >
          Moon
        </button>
        <button
          onClick={() => setUpdate(2)}
          className={`planet-button ${update === 2 ? "tested" : ""}`}
        >
          Mars
        </button>
        <button
          onClick={() => setUpdate(3)}
          className={`planet-button ${update === 3 ? "tested" : ""}`}
        >
          Europa
        </button>
        <button
          onClick={() => setUpdate(4)}
          className={`planet-button ${update === 4 ? "tested" : ""}`}
        >
          Titan
        </button>
      </div>
    </div>
  );
}
