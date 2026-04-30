import "./SearchBar.css";

import { useRef } from "react";

type SearchBarProps = {
  onChangeQuery: (q: string) => void;
};

export default function SearchBar({ onChangeQuery }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitSearch = () => {
    if (!inputRef.current) return;
    onChangeQuery(inputRef.current.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="검색어를 입력하시오." ref={inputRef} />
      <button onClick={submitSearch}>검색</button>
    </div>
  );
}
