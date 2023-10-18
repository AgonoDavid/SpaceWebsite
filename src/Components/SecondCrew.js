import Person2 from "../images/Person-2.png";
import line from "../images/line.png";

export function SecondCrew() {
  return (
    <div className="lg:flex justify-between gap-24 Destination-body">
      <div className=" lg:w-4/5  w-50 mx-auto text-center lg:text-start align-middle flex flex-col justify-center  leading-7 mt-[-60px]">
        <p className="text-blue-100 text-2xl font-Belleflair lg:text-5xl lg:pb-1">
          Mission Specialist
        </p>
        <p className=" text-white text-3xl font-Belleflair lg:text-6xl lg:pb-6  pb-4">
          MARK SHUTTLEWORTH
        </p>
        <p className=" text-blue-200  lg:text-[15px] lg:text-start  text-[12px] max-w-[290px] mx-auto lg:max-w-[none] font-barslow">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
      </div>
      <div className=" lg:w-full lg:h-[68vh] h-[30vh]  md:h-[30vh]">
        <img
          src={Person2}
          alt="Moonss"
          className=" w-4/12 mx-auto  lg:w-8/12 object-contain pt-5"
        />
        <img src={line} alt="line" />
      </div>
    </div>
  );
}
