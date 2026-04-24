import { useState } from "react";

export default function StateComponent() {
  const [count, setCount] = useState(0);
  const update = (step: number) => setCount((p) => p + step);
  const reset = () => setCount(0);
  return (
    <>
      <h1>State 올리기 2</h1>
      <p>총 갯수 {count}</p>
      <div>
        <StateUpdate step={1} onUpdate={update} />
        <StateUpdate step={3} onUpdate={update} />
        <StateUpdate step={5} onUpdate={update} />
        <StateUpdate step={-1} onUpdate={update} />
      </div>
      <br />
      <div>
        <StateReset onReset={reset} />
      </div>
    </>
  );
}

interface StateUpdateProp {
  step: number;
  onUpdate: (val: number) => void;
}

function StateUpdate({ step, onUpdate }: StateUpdateProp) {
  return <button onClick={() => onUpdate(step)}>{step}</button>;
}

interface StateResetProp {
  onReset: () => void;
}

function StateReset({ onReset }: StateResetProp) {
  return <button onClick={onReset}>Reset</button>;
}
