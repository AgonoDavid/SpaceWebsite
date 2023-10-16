import Person1 from "../images/Person-1.png";

export function FirstCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7">
        <p className=" text-slate-600 font-Belleflair text-7xl pb-1">
          Commander
        </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          Douglas Hurley
        </p>
        <p className=" text-blue-200  font-barslow">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <div className=" w-full" style={{ height: "61vh" }}>
        <img src={Person1} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
