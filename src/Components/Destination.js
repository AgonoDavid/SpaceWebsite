import logo from "../images/logo.svg";
import line from "../images/line.png";
import Moon from "../images/Moon.png";
import Mars from "../images/Mars.png";
import Europa from "../images/Europa.png";
import Titan from "../images/Titan.png";

import { Link } from "react-router-dom";
import { useState } from "react";

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

function Text() {
  return (
    <p className=" text-white font-barslow text-4xl Destination-body">
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

function MoonContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-3/5">
        <img src={Moon} alt="Moonss" className=" w-full" />
      </div>
      <div className=" w-2/5">
        <p className=" text-white font-Belleflair text-8xl">MOON</p>
        <p className=" text-blue-200  font-barslow">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p className=" font-barslow text-blue-200 ">AVG. DISTANCE</p>
            <p className=" font-Belleflair">384,400 km</p>
          </div>
          <div>
            <p className=" font-barslow text-blue-200 ">Est. travel time</p>
            <p className=" font-Belleflair">3 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function MarsContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-2/4">
        <img src={Mars} alt="Moonss" className=" w-full" />
      </div>
      <div className=" w-2/5">
        {/* <LoopThrough /> */}
        <p className=" text-white font-Belleflair text-8xl">MARS</p>
        <p className=" text-blue-200 font-barslow ">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p className=" font-barslow text-blue-200 ">AVG. DISTANCE</p>
            <p className=" font-Belleflair">225 MIL. km</p>
          </div>
          <div>
            <p className=" font-barslow text-blue-200 ">Est. travel time</p>
            <p className=" font-Belleflair">9 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function EuropaContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-2/4">
        <img src={Europa} alt="Moonss" className=" w-full" />
      </div>
      <div className=" w-2/5">
        {/* <LoopThrough /> */}
        <p className=" text-white font-Belleflair text-7xl">EUROPA</p>
        <p className=" text-blue-200 font-barslow ">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p className=" text-blue-200  font-barslow">AVG. DISTANCE</p>
            <p className=" font-Belleflair">628 MIL. km</p>
          </div>
          <div>
            <p className="text-blue-200  font-barslow">Est. travel time</p>
            <p className=" font-Belleflair">3 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function TitansContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-2/4">
        <img src={Titan} alt="Moonss" className=" w-full" />
      </div>
      <div className=" w-2/5">
        {/* <LoopThrough /> */}
        <p className=" text-white font-Belleflair text-8xl">TITAN</p>
        <p className="text-blue-200 font-barslow ">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p className=" text-blue-200  font-barslow">AVG. DISTANCE</p>
            <p className=" font-Belleflair">1.6 BIL. km</p>
          </div>
          <div>
            <p className=" text-blue-200  font-barslow">Est. travel time</p>
            <p className=" font-Belleflair">7 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoopThrough({ update, setUpdate }) {
  return (
    <div className="flex justify-between Destination-body-content gap-7 w-10">
      <button
        onClick={() => setUpdate(1)}
        className={`planet-button ${update === 1 ? "tested" : ""} w-full`}
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
  );
}
