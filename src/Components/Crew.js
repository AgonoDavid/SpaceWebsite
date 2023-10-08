import logo from "../images/logo.svg";
import line from "../images/line.png";
import { Link } from "react-router-dom";
import Person1 from "../images/Person-1.png";
import Person2 from "../images/Person-2.png";
import Person3 from "../images/Person-3.png";
import Person4 from "../images/Person-4.png";

export default function Body() {
  return (
    <div className="Crew-bg">
      <Navbar />
      <Text />
      <FirstCrew />
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
      <span className=" text-gray-600">02</span> Meet Your Crew
    </p>
  );
}

function FirstCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7">
        <p className=" text-slate-600 font-Belleflair text-7xl font-Belleflair pb-1">
          Commander
        </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          Douglas Hurley
        </p>
        <p className=" text-blue-200  font-barslow">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <div className=" w-full" style={{ height: "70vh" }}>
        <img src={Person1} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
function SecondCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7">
        <p className=" text-slate-600 font-Belleflair text-7xl font-Belleflair pb-1">
          Commander
        </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          Douglas Hurley
        </p>
        <p className=" text-blue-200  font-barslow">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <div className=" w-full" style={{ height: "70vh" }}>
        <img src={Person2} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
function ThirdCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7">
        <p className=" text-slate-600 font-Belleflair text-7xl font-Belleflair pb-1">
          Commander
        </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          Douglas Hurley
        </p>
        <p className=" text-blue-200  font-barslow">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <div className=" w-full" style={{ height: "70vh" }}>
        <img src={Person3} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
function FourthCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7">
        <p className=" text-slate-600 font-Belleflair text-7xl font-Belleflair pb-1">
          Commander
        </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          Douglas Hurley
        </p>
        <p className=" text-blue-200  font-barslow">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <div className=" w-full" style={{ height: "70vh" }}>
        <img src={Person4} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
