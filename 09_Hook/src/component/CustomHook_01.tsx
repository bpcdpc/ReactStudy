import { useToggle } from "./CustomHook_Toggle";

export default function CustomHook_01() {
    const { value, toggle } = useToggle();

    return (
        <div>
            <p>{value ? "ON" : "OFF"}</p>
            <button onClick={toggle}>toggle</button>
        </div>
    );
}