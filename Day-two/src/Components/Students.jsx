import React from "react";

const Students = ({ image, name, age }) => {
  return (
    <div className="bg-gray-900  text-3xl font-bold text-white  p-4">
      <div>
        <img src={image} alt="" className="w-100 h-100 cover rounded" />
        <h1>Name : {name}</h1>
        <p>Age : {age}</p>
      </div>
    </div>
  );
};

export default Students;
