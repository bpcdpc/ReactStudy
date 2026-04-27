import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log(`count 변경됨 : ${count}`);
  }, [count]);

  return <button onClick={() => setCount((p) => p + 1)}>클릭({count})</button>;
}
