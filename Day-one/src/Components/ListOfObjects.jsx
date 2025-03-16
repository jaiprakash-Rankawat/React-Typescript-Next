import React from "react";

const ListOfObjects = () => {
  const person = [
    { name: "Radha", age: 21, city: "Mathura" },
    { name: "Shyam", age: 22, city: "Mathura" },
    { name: "Mohan", age: 23, city: "Mathura" },
  ];
  return (
    <div>
      {person.map((person) => (
        <div>
          <p>age : {person.age}</p>
        </div>
      ))}
    </div>
  );
};

export default ListOfObjects;
