import Person4 from "../images/Person-4.png";

export function FourthCrew() {
  return (
    <div className="flex justify-between gap-24  Destination-body">
      <div className=" w-4/5 align-middle flex flex-col justify-center  leading-7">
        <p className=" text-slate-600 font-Belleflair text-6xl pb-1">
          Flight Engineer
        </p>
        <p className=" text-white font-Belleflair text-6xl pb-6">
          Anousheh Ansari
        </p>
        <p className=" text-blue-200  font-barslow">
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
      </div>
      <div className=" w-full" style={{ height: "61vh" }}>
        <img src={Person4} alt="Moonss" className=" w-4/5 h-full object-fit" />
      </div>
    </div>
  );
}
