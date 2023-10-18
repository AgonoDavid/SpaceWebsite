import Lottie from "lottie-react";
import animation from "../assets/explore.json";

import React from "react";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div className=" lg:flex body  lg:w-full justify-between  sm: mt-[29px] lg:mt-40">
      <div className="text-white lg:w-2/5  lg:text-start  max-sm: w-80 sm: m-auto sm: text-center ">
        <h3 className="font-barslow lg:text-3xl sm: text-[15px] text-blue-200 lg: pb-6  ">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="lg:text-8xl pb-3 font-Belleflair sm: text-5xl">SPACE</h1>
        <p className="lg:leading-9 lg:text-[13px]  pb-2 sm:leading-6 text-[14px] md:leading-9 md:text-[17px] text-blue-200 font-barslow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className=" lg:w-2/5 sm:w-full  text-center sm:mt-6">
        <Lottie
          animationData={animation}
          className=" lg:w-4/6 w-[35%] mx-auto"
        />
      </div>
    </div>
  );
}
