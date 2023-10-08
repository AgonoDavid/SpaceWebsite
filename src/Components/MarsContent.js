import line from "../images/line.png";
import Mars from "../images/Mars.png";

export function MarsContent() {
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
