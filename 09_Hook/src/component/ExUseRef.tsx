import { useRef } from "react";

export default function FocusCounter() {
    const inputRef = useRef<HTMLInputElement>(null); // DOM 접근용
    
    const handleClick = () => {
        inputRef.current?.focus();
        console.log(`Input 내용: ${inputRef.current?.value}`);
    };

    // input 요소의 주소를 inputRef에 참조
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="입력하세요"/>
            <button onClick={handleClick}>포커스</button>
        </div>
    );
}