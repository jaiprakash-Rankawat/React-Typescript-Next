import React from "react";

const BorderRadius = () => {
  return (
    <div>
      <div className="text-center text-3xl font-bold mt-8">Border Radius</div>

      <div className="w-96 m-10 p-5 bg-yellow-400 rounded ">border</div>
      <div className="w-96 m-10 p-5 bg-yellow-400  ">border</div>
      <div className="w-96 m-10 p-5 bg-yellow-400 rounded-lg ">border lg</div>
      <div className="w-96 m-10 p-5 bg-yellow-400 rounded-xl ">border xl</div>
      <div className="w-96 m-10 p-5 bg-yellow-400 rounded-2xl ">border 2xl</div>
      <div className="h-32 w-32 m-10 rounded-full bg-yellow-400 flex justify-center items-center ">
        border none
      </div>
    </div>
  );
};

export default BorderRadius;
