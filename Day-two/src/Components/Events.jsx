import React from "react";

const Events = () => {
  const manoj = () => {
    console.log("Button clicked");
    alert("Button clicked");
  };
  const handleMouse = () => {
    alert("Why are you Moving your mouse");
  };
  const handleCopy = () => {
    alert("Why are you steeling my content ");
  };
  return (
    <div>
      <button onClick={manoj}>Click me</button>
      {/* <p onMouseMove={handleMouse}> */}
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illo fuga
      reiciendis! Aliquam ipsam id numquam quo provident quaerat? Doloribus
      pariatur totam iure deserunt impedit ea nulla a ducimus corrupti!
      {/* </p> */}
      <hr />
      <p onCopy={handleCopy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores
        iusto, ipsa doloremque repellat mollitia iste minus odio ducimus
        blanditiis. Odio est nulla asperiores reiciendis sit, qui iure non
        inventore!
      </p>
    </div>
  );
};
``;

export default Events;
