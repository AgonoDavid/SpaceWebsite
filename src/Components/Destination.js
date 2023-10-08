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
      <div className="w-full pt-14">
        <img src={Moon} alt="Moonss" className=" w-96" />
      </div>
      <div className=" w-full">
        <p className=" text-white font-Belleflair text-9xl">MOON</p>
        <p className=" text-white">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p>AVG. DISTANCE</p>
            <p>384,400 km</p>
          </div>
          <div>
            <p>Est. travel time</p>
            <p>3 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function MarsContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-full">
        <img src={Mars} alt="Moonss" className=" w-full" />
      </div>
      <div className=" w-full">
        {/* <LoopThrough /> */}
        <p className=" text-white font-Belleflair text-9xl">MARS</p>
        <p className=" text-white">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p>AVG. DISTANCE</p>
            <p>225 MIL. km</p>
          </div>
          <div>
            <p>Est. travel time</p>
            <p>9 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function EuropaContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-full">
        <img src={Europa} alt="Moonss" className=" w-full" />
      </div>
      <div className=" w-full">
        {/* <LoopThrough /> */}
        <p className=" text-white font-Belleflair text-9xl">EUROPA</p>
        <p className=" text-white">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p>AVG. DISTANCE</p>
            <p>628 MIL. km</p>
          </div>
          <div>
            <p>Est. travel time</p>
            <p>3 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function TitansContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-full">
        <img src={Titan} alt="Moonss" className=" w-full" />
      </div>
      <div className=" w-full">
        {/* <LoopThrough /> */}
        <p className=" text-white font-Belleflair text-9xl">TITAN</p>
        <p className=" text-white">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p>AVG. DISTANCE</p>
            <p>1.6 BIL. km</p>
          </div>
          <div>
            <p>Est. travel time</p>
            <p>7 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// function LoopThrough({ selectPlanet, activePlanet, update, setUpdate }) {
//   return (
//     <div className="flex justify-between w-fulll Destination-body-content gap-7 text-white">
//       <button
//         onClick={() => setUpdate(1)}
//         className={update === 1 ? "tested" : null}
//       >
//         Moon
//       </button>
//       <button
//         onClick={() => setUpdate(2)}
//         className={update === 2 ? "tested" : null}
//       >
//         Mars
//       </button>
//       <button
//         onClick={() => setUpdate(3)}
//         className={update === 3 ? "tested" : null}
//       >
//         Europa
//       </button>
//       <button
//         onClick={() => setUpdate(4)}
//         className={update === 4 ? "tested" : null}
//       >
//         Titan
//       </button>
//     </div>
//   );
// }
function LoopThrough({ selectPlanet, activePlanet, update, setUpdate }) {
  return (
    <div className="flex justify-between w-full Destination-body-content gap-7 text-white">
      <button
        onClick={() => setUpdate(1)}
        className={`planet-button ${update === 1 ? "tested" : ""}`}
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
