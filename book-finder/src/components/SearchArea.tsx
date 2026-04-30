import "./SearchArea.css";

import { useEffect, useState } from "react";
import type { Book, ApiResponse, Direction } from "../types/Book";

import { useFetch } from "../hooks/useFetch";

import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Pagination from "./Pagination";

export default function SearchArea() {
  // const [documents, setDocuments] = useState<Book[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  // const [isEnd, setIsEnd] = useState<boolean>(true);

  const url = "https://dapi.kakao.com/v3/search/book";
  const apiKey = "KakaoAK 996044ba656885f34eb498a2a19292b8";

  const { documents, isEnd } = useFetch<Book>(query, page, url, apiKey);

  const onChangeQuery = (q: string) => {
    setQuery(q);
    setPage(1);
  };

  const onMovePage = (direction: Direction) => {
    switch (direction) {
      case "PREV":
        setPage((p) => p - 1);
        break;
      case "NEXT":
        setPage((p) => p + 1);
        break;
      default:
        return;
    }
  };

  // useEffect(() => {
  //   if (!query) return;

  //   const fetchBooks = async () => {
  //     try {
  //       const encodedQuery = encodeURIComponent(query);
  //       const endpoint = `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}`;

  //       const res = await fetch(endpoint, {
  //         headers: {
  //           Authorization: "KakaoAK 996044ba656885f34eb498a2a19292b8",
  //         },
  //       });

  //       if (!res.ok)
  //         throw new Error(`Error ${res.status}: HTTP request failed.`);

  //       const data: ApiResponse<Book> = await res.json();

  //       setDocuments(data.documents);
  //       setIsEnd(data.meta.is_end);
  //     } catch (err) {
  //       if (err instanceof Error) return err;
  //       return new Error("알 수 없는 에러가 발생했습니다.");
  //     }
  //   };
  //   fetchBooks();
  // }, [query, page]);

  return (
    <div className="search-area">
      <SearchBar onChangeQuery={onChangeQuery} />
      <BookList books={documents} />
      <Pagination page={page} isEnd={isEnd} onMovePage={onMovePage} />
    </div>
  );
}
