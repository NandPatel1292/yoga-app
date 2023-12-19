import React from "react";

const YogaLogo = (props) => {
  return (
    <>
      <div className="flex h-screen bg-white">
        <div className=" flex flex-row min-h-full flex-1 gap-14 justify-center items-center px-6 py-12 lg:px-8">
          <span className="w-56 h-11 text-lime-500 text-8xl font-bold font-['Inter'] ">
            YOGA
          </span>
          <span className="w-52 h-11 text-violet-700 text-opacity-80 text-8xl font-bold font-['Inter'] ">
            DAY
          </span>
        </div>
        <div className="flex bg-violet-800 w-2/4 justify-center items-center">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default YogaLogo;
