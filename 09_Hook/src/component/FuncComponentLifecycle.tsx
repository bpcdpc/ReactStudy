import { useEffect, useState } from "react";

export default function UseEffectCounter() {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => setCount((prev) => prev + 1);

    useEffect(() => { 
        document.title = `${count}번 클릭했습니다.`;
        console.log('count 변경됨: ', count);
    }, [count]);
    // 의존성 배열, 변경되었을때 useEffect가 실행되어야하는 변수들
    // [](빈배열)일 경우 최초 한번만 실행한다, 생략할때는 렌더링될때마다 실행

    return (
        <div>
            <p>{count}번 클릭했습니다</p>
            <button onClick={handleClick}>클릭</button>
        </div>
    );
}
