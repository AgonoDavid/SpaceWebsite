import logo from "../images/logo.svg";
import line from "../images/line.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { MoonContent } from "./MoonContent";
import { MarsContent } from "./MarsContent";
import { EuropaContent } from "./EuropaContent";
import { TitansContent } from "./TitansContent";
import Navbar from "./Navbar";

export default function Destination() {
  const [update, setUpdate] = useState(1);

  return (
    <div className="Destination">
      <div>
        <Navbar />
      </div>
      <Text />
      <LoopThrough update={update} setUpdate={setUpdate} />
      <Body update={update} />
    </div>
  );
}

function Text() {
  return (
    <p className=" font-barslow lg:text-3xl lg:mt-[10px] mt-[-5px] Destination-body text-white lg:w-full  lg:text-start  max-sm: w-80 sm: m-auto sm: text-center ">
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
    <div className="flex justify-between gap-7 w-full lg:max-w-[800px] mt-5 m-auto">
      <div className=" lg:w-2/5 hidden lg:block"></div>
      <div className=" lg:w-2/5 max-sm: w-70 sm: m-auto gap-10 flex justify-between ">
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
