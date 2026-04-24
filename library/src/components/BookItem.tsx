import type { Book } from "../types/Book";

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  const { title, image, author, publisher, pubyear } = book;

  return (
    <div className="book-item">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>
        <p>{author}</p>
        <p>{publisher}</p>
        <p>{pubyear}</p>
      </div>
    </div>
  );
}

export default BookItem;
