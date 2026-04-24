import "./App.css";

import BookItem from "./components/BookItem";
import type { Book } from "./types/Book";

const books: Book[] = [
  {
    title: "한입 크기로 잘라먹는 리액트",
    image:
      "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788966265237.jpg",
    author: "이정환",
    publisher: "인사이트",
    pubyear: "2026",
  },
  {
    title: "처음 배우는 애저",
    image:
      "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791169211598.jpg",
    author: "김도균",
    publisher: "한빛미디어 ",
    pubyear: "2023",
  },
  {
    title: "Node.js 교과서",
    image:
      "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791140702398.jpg",
    author: "조현영",
    publisher: "길벗",
    pubyear: "2022",
  },
];

function App() {
  return (
    <>
      <h1>My Library</h1>
      <div className="library">
        {books.map((b) => (
          <BookItem book={b} />
        ))}
      </div>
    </>
  );
}

export default App;
