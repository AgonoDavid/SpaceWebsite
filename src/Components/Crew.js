import logo from "../images/logo.svg";
import line from "../images/line.png";
import { Link } from "react-router-dom";
import { FirstCrew } from "./FirstCrew";
import { SecondCrew } from "./SecondCrew";
import { ThirdCrew } from "./ThirdCrew";
import { FourthCrew } from "./FourthCrew";
import { useState } from "react";

export default function Body() {
  const [crew, setCrew] = useState(1);
  return (
    <div className="Crew-bg">
      <Navbar />
      <Text />
      <NavigateCrew crew={crew} />
      <Step setCrew={setCrew} crew={crew} />
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
          <Link to="/Destination" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">01</span> DESTINATION
          </Link>
          <Link to="/Crew" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">02</span> CREW
          </Link>
          <Link to="/Technology" className=" font-barslow font-light">
            <span className=" font-barslow font-bold">03</span> TECHNOLOGY
          </Link>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <p className=" text-white font-barslow text-3xl Destination-body">
      <span className=" text-gray-600">02</span> Meet Your Crew
    </p>
  );
}

function NavigateCrew({ crew }) {
  return (
    <div>
      <div>
        {crew === 1 ? <FirstCrew /> : null}
        {crew === 2 ? <SecondCrew /> : null}
        {crew === 3 ? <ThirdCrew /> : null}
        {crew === 4 ? <FourthCrew /> : null}
      </div>
    </div>
  );
}
function Step({ setCrew, crew }) {
  return (
    <div
      className="w-full flex gap-2 Destination-body-crew btnStyle"
      style={{ color: "white" }}
    >
      <button className={crew === 1 ? "button" : ""} onClick={() => setCrew(1)}>
        1
      </button>
      <button className={crew === 2 ? "button" : ""} onClick={() => setCrew(2)}>
        2
      </button>
      <button className={crew === 3 ? "button" : ""} onClick={() => setCrew(3)}>
        3
      </button>
      <button className={crew === 4 ? "button" : ""} onClick={() => setCrew(4)}>
        4
      </button>
    </div>
  );
}
