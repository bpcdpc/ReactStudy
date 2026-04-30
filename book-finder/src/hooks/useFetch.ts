import { useEffect, useState } from "react";
import type { ApiResponse } from "../types/Book";

export function useFetch<T>(
  query: string,
  page: number,
  url: string,
  apiKey: string,
) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(true);

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const endpoint = `${url}?query=${encodedQuery}&page=${page}`;

        const res = await fetch(endpoint, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!res.ok)
          throw new Error(`Error ${res.status}: HTTP request failed.`);

        const data: ApiResponse<T> = await res.json();

        setDocuments(data.documents);
        setIsEnd(data.meta.is_end);
      } catch (err) {
        if (err instanceof Error) return err;
        return new Error("알 수 없는 에러가 발생했습니다.");
      }
    };
    fetchBooks();
  }, [query, page, url, apiKey]);

  return { documents, isEnd };
}
