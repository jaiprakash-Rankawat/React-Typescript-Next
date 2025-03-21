import React from "react";

const Letter = () => {
  return (
    <div>
      <div className="text-4xl text-center font-bold mt-8">Letter Space</div>
      <div className="w-96 bg-amber-200 p-10 m-10 rounded-lg font-bold tracking-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
        repellendus dolorem quasi id similique, neque fuga est veniam iste?
      </div>
      <div className="w-96 bg-amber-200 p-10 m-10 rounded-lg font-bold tracking-wider">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
        repellendus dolorem quasi id similique, neque fuga est veniam iste?
      </div>
      <div className="w-96 bg-amber-200 p-10 m-10 rounded-lg font-bold tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
        repellendus dolorem quasi id similique, neque fuga est veniam iste?
      </div>
      <div className="w-96 bg-amber-200 p-10 m-10 rounded-lg font-bold -tracking-widest">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
        repellendus dolorem quasi id similique, neque fuga est veniam iste?
      </div>
    </div>
  );
};

export default Letter;
