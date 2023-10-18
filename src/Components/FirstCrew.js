import Person1 from "../images/Person-1.png";

export function FirstCrew() {
  return (
    <div className="lg:flex justify-between gap-24 Destination-body">
      <div className=" lg:w-4/5  w-50 mx-auto text-center lg:text-start align-middle flex flex-col justify-center  leading-7 mt-[-60px]">
        <p className=" text-blue-100 text-2xl font-Belleflair lg:text-7xl lg:pb-1">
          Commander
        </p>
        <p className=" text-white text-3xl font-Belleflair lg:text-6xl lg:pb-6  pb-4">
          Douglas Hurley
        </p>
        <p className=" text-blue-200  lg:text-[15px] lg:text-start  text-[12px] max-w-[290px] mx-auto lg:max-w-[none] font-barslow">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <div className=" lg:w-full lg:h-[68vh] h-[30vh]  md:h-[30vh]">
        <img
          src={Person1}
          alt="Moonss"
          className="w-2/5 mx-auto lg:w-50 object-contain pt-6"
        />
      </div>
    </div>
  );
}
