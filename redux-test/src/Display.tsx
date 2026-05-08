import { useSelector } from "react-redux";

export default function Display() {
  const count = useSelector((state: { value: 0 }) => state.value);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
