import Person3 from "../images/Person-3.png";

export function ThirdCrew() {
  return (
    <div className="lg:flex justify-between gap-24 Destination-body">
      <div className=" lg:w-4/5  w-50 mx-auto text-center lg:text-start align-middle flex flex-col justify-center  leading-7 mt-[-60px]">
        <p className=" text-slate-600 text-2xl font-Belleflair lg:text-7xl lg:pb-1">
          PILOT
        </p>
        <p className=" text-white text-3xl font-Belleflair lg:text-6xl lg:pb-6  pb-4">
          Victor Glover
        </p>
        <p className=" text-blue-200  lg:text-[15px] lg:text-start  text-[12px] max-w-[290px] mx-auto lg:max-w-[none] font-barslow">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
      </div>
      <div className=" lg:w-full lg:h-[68vh] h-[30vh]  md:h-[30vh]">
        <img
          src={Person3}
          alt="Moonss"
          className="w-2/5 mx-auto lg:w-50 object-contain pt-6"
        />
      </div>
    </div>
  );
}
