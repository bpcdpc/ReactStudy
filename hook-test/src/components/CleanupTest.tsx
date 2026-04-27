import { useState, useEffect } from "react";

export default function CleanupTest() {
  const [time, setTime] = useState<number>(0);

  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    console.log("window clicked!");
    setCount((p) => p + 1);
  };

  useEffect(() => {
    console.log("타이머 시작");
    const id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1001);

    // cleanup
    return () => {
      console.log("타이머 정리");
      clearInterval(id);
    };
  }, [time]);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    // cleanup
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [count]);

  return (
    <h1>
      {time}초, {count} clicked!
    </h1>
  );
}
