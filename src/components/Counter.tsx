import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>当前数字：{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>点击+1</button>
    </>
  );
};
