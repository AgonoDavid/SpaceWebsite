import Person2 from "../images/Person-2.png";

export function SecondCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7 ">
        <p className=" text-slate-600 font-Belleflair text-7xl pb-1">
          Mission Specialist
        </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          MARK SHUTTLEWORTH
        </p>
        <p className=" text-blue-200  font-barslow">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
      </div>
      <div className=" w-full" style={{ height: "61vh" }}>
        <img src={Person2} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
