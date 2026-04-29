import { useEffect, useState } from "react";

export default function CustomTimer() {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        console.log('타이머 시작');

        const funcTimer = () => { setTime((t) => t + 1); };
        const id = setInterval(funcTimer, 1000);

        // Clean Up
        const funcCleanUp = () => {
            console.log('타이머 정리');
            clearInterval(id);
        };
        return funcCleanUp;
    }, []);

    return <h1>{time}초</h1>;
}