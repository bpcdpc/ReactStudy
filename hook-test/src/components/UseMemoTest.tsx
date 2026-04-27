import { useState, useMemo } from "react";

export default function UseMemoTest() {
  const [query, setQuery] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const list = ["apple", "banana", "mango", "grape", "orange", "strawberry"];

  const filtered = useMemo(() => {
    console.log("필터 실행됨");
    return list.filter((item) => item.includes(query));
  }, [query]);

  return (
    <div>
      <h1>검색</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하시오."
      />
      <h2>관련없는 상태 변경</h2>
      <button onClick={() => setCount((p) => p + 1)}>
        count 증가({count})
      </button>
      <p>
        위 버튼을 클릭해서 앱이 리렌더링되더라도 콘솔에서 "필터 실행됨" 이
        출력되지 않습니다.
      </p>
      <p>즉, useMemo한 filtered 값은 다시 계산되지 않습니다.</p>
      <ul>
        {filtered.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
