import React from "react";

const Border = () => {
  return (
    <div>
      <div className="text-center text-3xl font-bold mt-8">Border</div>
      <div className="w-96 m-10 p-5 border-2 border-black">border</div>
      <div className="w-96 m-10 p-5 border border-black">border</div>
      <div className="w-96 m-10 p-5 border-4 border-black">border</div>
      <div className="w-96 m-10 p-5 border-l-4 border-red-500 shadow-xl shadow-gray-950">
        border
      </div>
      <div className="w-96 m-10 p-5 border-b-4 border-red-500 shadow-xl shadow-gray-950">
        border
      </div>
      <div className="w-96 m-10 p-5 border-x-4 border-red-500 shadow-xl shadow-gray-950">
        border
      </div>
      <div className="w-96 m-10 p-5 border-y-4 border-red-500 shadow-xl shadow-gray-950">
        border
      </div>
    </div>
  );
};

export default Border;
