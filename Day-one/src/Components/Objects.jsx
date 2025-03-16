import React from "react";

const Objects = () => {
  const person = {
    name: "Radha",
    age: 21,
    city: "Mathura",
  };
  return (
    <div>
      <p>Name : {person.name}</p>
      <p>Age : {person.age}</p>
      <p>City : {person.city}</p>
    </div>
  );
};

export default Objects;
