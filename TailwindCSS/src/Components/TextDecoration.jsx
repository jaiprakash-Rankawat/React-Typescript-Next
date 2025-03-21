import React from "react";

const TextDecoration = () => {
  return (
    <div className="">
      <div className="underline decoration-1">Hello world</div>
      <div className="underline ">Hello world</div>
      <div className="underline underline-offset-2 ">offset 2</div>
      <div className="underline underline-offset-4 ">offset 4</div>
      <div className="underline underline-offset-8 ">offset 8</div>
      <div className=" decoration-2 ">Hello world</div>

      <div className="bg-violet-500 p-10 w-96 line-through decoration-yellow-500 decoration-2">
        Radha Rani
      </div>
      <div className="bg-violet-500 p-10 w-96 overline decoration-yellow-500 decoration-2">
        Radha Rani
      </div>
      <div className="bg-violet-500 p-10 w-96 underline decoration-yellow-500 decoration-2">
        Radha Rani
      </div>
    </div>
  );
};

export default TextDecoration;
