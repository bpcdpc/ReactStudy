import "./BookDetail.css";

import type { Book } from "../types/Book";

type BookDetailProps = {
  book: Book | null;
};

export default function BookDetail({ book }: BookDetailProps) {
  if (!book) return <div className="book-detail">책을 선택하세요.</div>;

  const {
    title,
    thumbnail,
    authors,
    publisher,
    datetime,
    contents,
    isbn,
    url,
  } = book;

  return (
    <div className="book-detail">
      <h2>{title}</h2>
      <p>
        <strong>저자:</strong>
        {authors.join(", ")}
      </p>
      <p>
        <strong>출판사:</strong>
        {publisher}
      </p>
      <p>
        <strong>출판일:</strong>
        {datetime.split("T")[0]}
      </p>
      <p>
        <strong>ISBN:</strong>
        {isbn}
      </p>
      <p>
        <strong>책 내용:</strong>
        {contents}
      </p>
      <p>
        <strong>
          <a href={url} target="_blank">
            상세 내용
          </a>
        </strong>
      </p>
      <img src={thumbnail} alt={`${title}의 표지`} />
    </div>
  );
}
