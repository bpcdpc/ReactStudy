import type { Book } from "../types/Book";
import { createContext } from "react";

type BookContextType = {
  selectBook: (book: Book) => void;
};

const BookContext = createContext<BookContextType | null>(null);
BookContext.displayName = "BookContext";

export default BookContext;
