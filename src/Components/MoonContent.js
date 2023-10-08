import line from "../images/line.png";
import Moon from "../images/Moon.png";

export function MoonContent() {
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
