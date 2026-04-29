import { useRef } from "react";

export default function UseRefSample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const clickCountRef = useRef<number>(0);

  const handleClick = () => {
    inputRef.current!.focus();
    clickCountRef.current += 1;
    console.log(`${clickCountRef.current}번 클릭됨.`);
  };

  return (
    <div>
      <h1>UseRefSample</h1>
      <input ref={inputRef} type="text" placeholder="값을 입력하시오." />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
