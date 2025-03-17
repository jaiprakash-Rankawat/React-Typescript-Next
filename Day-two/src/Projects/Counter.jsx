import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-yellow-500 p-2 rounded hover:bg-yellow-600"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-yellow-500 p-2 rounded hover:bg-yellow-600 "
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
