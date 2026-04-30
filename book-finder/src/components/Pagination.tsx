import "./Pagination.css";

import type { Direction } from "../types/Book";

type PaginationProps = {
  page: number;
  isEnd: boolean;
  onMovePage: (direction: Direction) => void;
};

export default function Pagination({
  page,
  isEnd,
  onMovePage,
}: PaginationProps) {
  const movePrev = () => {
    onMovePage("PREV");
  };

  const moveNext = () => {
    onMovePage("NEXT");
  };

  return (
    <div className="pagination">
      <button onClick={movePrev} disabled={page <= 1}>
        이전
      </button>
      <span>{page}</span>
      <button onClick={moveNext} disabled={isEnd}>
        다음
      </button>
    </div>
  );
}
