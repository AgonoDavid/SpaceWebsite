import Person4 from "../images/Person-4.png";

export function FourthCrew() {
  return (
    <div className="lg:flex justify-between gap-24 Destination-body">
      <div className=" lg:w-4/5  w-50 mx-auto text-center lg:text-start align-middle flex flex-col justify-center  leading-7 mt-[-60px]">
        <p className="text-blue-100 text-2xl font-Belleflair lg:text-7xl lg:pb-1">
          Flight Engineer
        </p>
        <p className=" text-white text-3xl font-Belleflair lg:text-6xl lg:pb-6  pb-4">
          Anousheh Ansari
        </p>
        <p className=" text-blue-200  lg:text-[15px] lg:text-start  text-[12px] max-w-[290px] mx-auto lg:max-w-[none] font-barslow">
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
      </div>
      <div className=" lg:w-full lg:h-[68vh] h-[30vh]  md:h-[30vh]">
        <img
          src={Person4}
          alt="Moonss"
          className="w-2/5 mx-auto lg:w-50 object-contain pt-10"
        />
      </div>
    </div>
  );
}
