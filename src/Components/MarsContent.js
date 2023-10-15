import line from "../images/line.png";
import Mars from "../images/Mars.png";

export function MarsContent() {
  return (
    <div className=" lg:flex lg:w-full  w-full justify-between gap-24">
      <div className=" lg:w-2/5 sm:w-full md:w-full text-center sm:mt-6">
        <img
          src={Mars}
          alt="Moonss"
          className=" lg:w-full w-2/5 mx-auto  pb-5 "
        />
      </div>
      <div className=" lg:w-2/5 sm:w-2/3 lg:text-start max-sm: w-80 sm: m-auto text-center">
        <p className=" text-white font-Belleflair lg:text-8xl text-4xl">MARS</p>
        <p className=" text-blue-200  font-barslow w-full lg:text-base text-[13px] md:text-xl pt-3">
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
