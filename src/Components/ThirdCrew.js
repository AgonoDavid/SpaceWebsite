import Person3 from "../images/Person-3.png";

export function ThirdCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7">
        <p className=" text-slate-600 font-Belleflair text-7xl pb-1">PILOT </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          Victor Glover
        </p>
        <p className=" text-blue-200  font-barslow">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
      </div>
      <div className=" w-full" style={{ height: "61vh" }}>
        <img src={Person3} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
