import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="text-center">
      Counter
      <h1 className="font-bold text-red-800">{count}</h1>
      <button className="btn btn-info" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
