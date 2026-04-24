import type { ChangeEvent } from "react";

interface Child1Props {
  onInputChange: (value: string) => void;
}

function Child1({ onInputChange }: Child1Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };
  return (
    <input type="text" onChange={handleChange} placeholder="입력하세요." />
  );
}

export default Child1;
