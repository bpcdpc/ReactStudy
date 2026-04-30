import "./BookItem.css";

import type { Book } from "../types/Book";
import { useContext } from "react";
import BookContext from "../contexts/BookContext";

type BookItemProps = {
  book: Book;
};

export default function BookItem({ book }: BookItemProps) {
  const { title, thumbnail, authors, publisher, datetime } = book;

  const context = useContext(BookContext);

  if (!context) throw new Error("Error: Context가 없습니다.");

  const { selectBook } = context;

  return (
    <div className="book-item" onClick={() => selectBook(book)}>
      <img src={thumbnail} alt={`${title}의 표지`} />
      <div className="book-info">
        <h3>{title}</h3>
        <p>
          <span>{authors.join(", ")}</span>
          <span>
            {publisher}, {datetime.split("-")[0]}
          </span>
        </p>
      </div>
    </div>
  );
}
