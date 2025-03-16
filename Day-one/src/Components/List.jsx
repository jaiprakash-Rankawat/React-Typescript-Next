import React from "react";

const List = () => {
  const names = ["Radha", "Shyam", "Mohan", "Radha"];
  const age = 22;
  return (
    <div>
      {names.map((name, index) => (
        <div>
          <p>{name}</p>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
