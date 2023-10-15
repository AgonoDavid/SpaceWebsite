import line from "../images/line.png";
import Titan from "../images/Titan.png";

export function TitansContent() {
  return (
    <div className=" lg:flex lg:w-full  w-full justify-between gap-24">
      <div className=" lg:w-2/5 sm:w-full md:w-full text-center sm:mt-6">
        <img
          src={Titan}
          alt="Moonss"
          className=" lg:w-full w-2/5 mx-auto  pb-5 "
        />
      </div>
      <div className=" lg:w-2/5 sm:w-2/3 lg:text-start max-sm: w-80 sm: m-auto text-center">
        <p className=" text-white font-Belleflair lg:text-8xl text-4xl">
          TITAN
        </p>
        <p className=" text-blue-200  font-barslow w-full lg:text-base text-[13px] md:text-xl pt-3">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <img src={line} alt="line" className=" pt-5 pb-5" />

        <div className=" flex justify-between text-white">
          <div className=" text-white">
            <p className=" font-barslow text-blue-200 ">AVG. DISTANCE</p>
            <p className=" font-Belleflair">1.6 BIL. km</p>
          </div>
          <div>
            <p className=" font-barslow text-blue-200 ">Est. travel time</p>
            <p className=" font-Belleflair">7 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
