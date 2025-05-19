import React from "react";

const student = (props: { name: string; age: number; image: string }) => {
  return (
    <div className="text-xl p-2 border border-black bg-blue-100">
      <img
        src={props.image}
        alt=""
        className="w-[100%] h-72
      "
      />
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default student;
