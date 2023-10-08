import line from "../images/line.png";
import Europa from "../images/Europa.png";

export function EuropaContent() {
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
