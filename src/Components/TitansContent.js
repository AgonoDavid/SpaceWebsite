import line from "../images/line.png";
import Titan from "../images/Titan.png";

export function TitansContent() {
  return (
    <div className="flex justify-between gap-24">
      <div className=" w-2/5">
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
