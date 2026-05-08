interface BookProps {
  image: string;
  title: string;
  author: string;
}

function Book({ image, title, author }: BookProps) {
  return (
    <div>
      <img src={image} style={{ width: "200px" }} />
      <h1>이 책의 제목은 {title}입니다.</h1>
      <h2>이 책의 저자는 {author}입니다.</h2>
    </div>
  );
}

export default Book;
