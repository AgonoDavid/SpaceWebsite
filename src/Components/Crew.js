import logo from "../images/logo.svg";
import line from "../images/line.png";
import { Link } from "react-router-dom";
import { FirstCrew } from "./FirstCrew";
import { SecondCrew } from "./SecondCrew";
import { ThirdCrew } from "./ThirdCrew";
import { FourthCrew } from "./FourthCrew";
import { useState } from "react";
import Navbar from "./Navbar";

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

function Text() {
  return (
    <p className=" text-white font-barslow lg:text-3xl lg:max-w-[1000px] lg:text-start text-center lg:mx-auto lg:pb-0 pb-8 mt-[-10px]">
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
      className="w-full flex gap-2 btnStyle lg:mt-[-90px] mt-[50px] md:mt-[180px] font-barslow lg:max-w-[1000px] max-w-[200px] mx-auto"
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
