import type { Book, BookResponse } from "../types/Types";

import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";

export default function SearchArea() {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState<string>("리액트");

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      try {
        const encodedQuery: string = encodeURIComponent(query);
        const endpoint: string = `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&size=${1}&page=${1}`;
        const apiKey: string = "KakaoAK my Key";

        const res = await fetch(endpoint, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!res.ok) throw new Error(`Error ${res.status}: HTTP 요청 실패`);

        const data: BookResponse<Book> = await res.json();

        setBooks(data.documents);
        console.log(books);
      } catch (err) {
        if (err instanceof Error) return err;
        return new Error(`Error: 알 수 없는 오류 발생`);
      }
    };
    fetchBooks();
  }, [query]);

  const onChangeQuery = (q: string) => {
    setQuery(q);
  };

  return (
    <div>
      <SearchBar onChangeQuery={onChangeQuery} />
      {/* 
      <BookList />
      <Pagination /> */}
    </div>
  );
}
