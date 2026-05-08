// import { useRef } from "react";

// type SearchBarProps = {
//   onChangeQuery: (q: string) => void;
// };

// export default function SearchBar({ onChangeQuery }: SearchBarProps) {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const submitSearch = () => {
//     if (!inputRef.current) return;
//     onChangeQuery(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input type="text" placeholder="검색어를 입력하세요." ref={inputRef} />
//       <button onClick={submitSearch}>검색</button>
//     </div>
//   );
// }

import { useRef } from "react";

type SearchBarProps = {
  query: string;
  onSearchSubmit: (query: string) => void;
};

export default function SearchBar({ query, onSearchSubmit }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    if (!inputRef.current) return;
    onSearchSubmit(inputRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하시오."
        onChange={onChange}
        value={query}
        ref={inputRef}
      />
    </div>
  );
}
