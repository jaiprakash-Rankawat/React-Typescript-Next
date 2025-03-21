import React from "react";

const Width = () => {
  return (
    <div className="flex gap-2 flex-col">
      <div className="text-4xl text-center font-bold mt-8 ">Width </div>
      <div className="bg-yellow-400 w-96">Radha</div>
      <div className="bg-violet-400 w-3/4">Radha</div>
      <div className="bg-orange-400 w-1/2">50%</div>
      <div className="bg-green-400 w-1/5">25%</div>
      <div className="bg-green-400 w-64">64x4</div>

      <div className="w-64">
        <div className="bg-gray-900 text-white text-4xl mb-4 w-screen">
          Nilesh{" "}
        </div>
        <div className="bg-gray-900 text-white text-4xl w-full">Nilesh </div>
      </div>
    </div>
  );
};

export default Width;
