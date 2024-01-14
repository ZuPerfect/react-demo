import React, { useState } from "react";
import * as antd from "antd";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <antd.Divider>当前数字：{count}</antd.Divider>
      <antd.Button onClick={() => setCount((count) => count + 1)}>
        点击+1
      </antd.Button>
    </>
  );
};
