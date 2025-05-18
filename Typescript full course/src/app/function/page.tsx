import React from "react";

const page = () => {
  type person = {
    name: string;
    age: number;
    city?: string;
  };

  const person: person = {
    name: "jai parakash",
    age: 22,
    city: "Lucknow",
  };

  const person2: person = {
    name: "jai parakash",
    age: 22,
  };
  return (
    <div>
      <div>Person's Details</div>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.city}</div>
      <div>Person2's Details</div>
      <div>{person2.name}</div>
      <div>{person2.age}</div>
      <div>This will not rendered {person2.city}</div>
    </div>
  );
};

export default page;
