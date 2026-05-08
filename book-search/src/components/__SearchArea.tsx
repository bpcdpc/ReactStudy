// import { useEffect, useState } from "react";
// import type { Book, BookResponse } from "../types/Types";
// import { API_KEY, BASE_URL } from "../config/env";
// import SearchBar from "./SearchBar";

// export default function SearchArea() {
//   const [documents, setDocuments] = useState<Book[]>([]);
//   const [query, setQuery] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!query) return;
//     const fetchBooks = async () => {
//       try {
//         setError(null);

//         const endcodedQuery = encodeURIComponent(query);
//         const endpoint = `${BASE_URL}?query=${endcodedQuery}&size=${50}&page=${1}`;
//         const apiKey = `KakaoAK ${API_KEY}`;

//         console.log(endpoint);

//         const res = await fetch(endpoint, {
//           headers: { Authorization: apiKey },
//         });

//         if (!res.ok) throw new Error(`Error ${res.status} : HTTP 요청 실패`);

//         const data: BookResponse<Book> = await res.json();

//         setDocuments(data.documents);
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message);
//           return;
//         }
//         setError("Error: 알 수 없는 에러 발생");
//       }
//     };
//     fetchBooks();
//   }, [query]);

//   const onChangeQuery = (q: string) => {
//     setQuery(q);
//   };

//   console.log(documents);

//   return (
//     <div>
//       {error && <div>{error}</div>}
//       <SearchBar query={query} onSearchSubmit={onChangeQuery} />
//     </div>
//   );
// }
