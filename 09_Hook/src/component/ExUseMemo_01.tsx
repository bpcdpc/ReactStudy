import { useMemo } from "react";

type Props = {
    num: number;
};

export default function ExpensiveCalc({ num }: Props) {
    const expensiveCalc = (n: number) => {
        console.log('비싼 계산 실행 중...');
        return num * 2;
    };

    const memoizedValue = useMemo(() => expensiveCalc(num), [num]);

    return <div>결과: {memoizedValue}</div>
}