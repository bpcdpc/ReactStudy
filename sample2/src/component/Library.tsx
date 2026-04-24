import Book from "./Book";

function Library() {
  return (
    <>
      <Book
        image={
          "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788966265237.jpg"
        }
        title={"한입 크기로 잘라먹는 리액트"}
        author={"이정환"}
      />
      <Book
        image={"https://image.yes24.com/goods/123270122/XL"}
        title={"처음 배우는 애저"}
        author={"김도균"}
      />
      <Book
        image={
          "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791140702398.jpg"
        }
        title={"Node.js 교과서"}
        author={"조현영"}
      />
    </>
  );
}

export default Library;
