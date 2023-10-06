import logo from "../images/logo.svg";
import line from "../images/line.png";
import Moon from "../images/Moon.png";
import Mars from "../images/Mars.png";
import Europa from "../images/Europa.png";
import Titan from "../images/Titan.png";

import { Link } from "react-router-dom";

const Planets = [
  <MoonContent />,
  //   <MarsContent />,
  //   <EuropaContent />,
  //   <TitansContent />,
];

export default function Destination() {
  return (
    <div className="Destination">
      <Navbar />
      <Text />
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
    <p
      className=" text-white font-barslow text-4xl Destination-body"
      style={{ border: "2px solid red" }}
    >
      <span className=" text-gray-600">01</span> Pick your destination
    </p>
  );
}

function Body() {
  return (
    <div>
      <div>
        {Planets.map((x) => (
          <Items data={x} />
        ))}
      </div>
    </div>
  );
}

function Items({ data }) {
  return <div className="Destination-body-content">{data}</div>;
}

function MoonContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className="w-full pt-14">
        <img src={Moon} alt="Moonss" className=" w-96" />
      </div>
      <div className=" w-full">
        <LoopThrough />
        <p className=" text-white font-Belleflair text-9xl">Moon</p>
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
// function MarsContent() {
//   return (
//     <div className="flex justify-between gap-24">
//       <div className=" w-full">
//         <img src={Mars} alt="Moonss" className=" w-full" />
//       </div>
//       <div className=" w-full">
//         <LoopThrough />
//         <p className=" text-white font-Belleflair text-9xl">Moon</p>
//         <p className=" text-white">
//           See our planet as you’ve never seen it before. A perfect relaxing trip
//           away to help regain perspective and come back refreshed. While you’re
//           there, take in some history by visiting the Luna 2 and Apollo 11
//           landing sites.
//         </p>
//         <img src={line} alt="line" className=" pt-5 pb-5" />

//         <div className=" flex justify-between text-white">
//           <div className=" text-white">
//             <p>AVG. DISTANCE</p>
//             <p>384,400 km</p>
//           </div>
//           <div>
//             <p>Est. travel time</p>
//             <p>3 days</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function EuropaContent() {
//   return (
//     <div className="flex justify-between gap-24">
//       <div className=" w-full">
//         <img src={Europa} alt="Moonss" className=" w-full" />
//       </div>
//       <div className=" w-full">
//         <LoopThrough />
//         <p className=" text-white font-Belleflair text-9xl">Moon</p>
//         <p className=" text-white">
//           See our planet as you’ve never seen it before. A perfect relaxing trip
//           away to help regain perspective and come back refreshed. While you’re
//           there, take in some history by visiting the Luna 2 and Apollo 11
//           landing sites.
//         </p>
//         <img src={line} alt="line" className=" pt-5 pb-5" />

//         <div className=" flex justify-between text-white">
//           <div className=" text-white">
//             <p>AVG. DISTANCE</p>
//             <p>384,400 km</p>
//           </div>
//           <div>
//             <p>Est. travel time</p>
//             <p>3 days</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function TitansContent() {
//   return (
//     <div className="flex justify-between gap-24">
//       <div className=" w-full">
//         <img src={Titan} alt="Moonss" className=" w-full" />
//       </div>
//       <div className=" w-full">
//         <LoopThrough />
//         <p className=" text-white font-Belleflair text-9xl">Moon</p>
//         <p className=" text-white">
//           See our planet as you’ve never seen it before. A perfect relaxing trip
//           away to help regain perspective and come back refreshed. While you’re
//           there, take in some history by visiting the Luna 2 and Apollo 11
//           landing sites.
//         </p>
//         <img src={line} alt="line" className=" pt-5 pb-5" />

//         <div className=" flex justify-between text-white">
//           <div className=" text-white">
//             <p>AVG. DISTANCE</p>
//             <p>384,400 km</p>
//           </div>
//           <div>
//             <p>Est. travel time</p>
//             <p>3 days</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function LoopThrough() {
  return (
    <div
      className="flex justify-between w-fulll Destination-body-content gap-7"
      style={{ border: "2px solid red" }}
    >
      <p>Moon</p>
      <p>Mars</p>
      <p>Europa</p>
      <p>Titan</p>
    </div>
  );
}
