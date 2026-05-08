import { Link } from "react-router-dom";
import Card from "./Card";

export default function Main() {
  return (
    <main>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      {/* <ul>
        <Link to="/product/1">
          <li>1번 상품</li>
        </Link>
        <Link to="/product/2">
          <li>2번 상품</li>
        </Link>
      </ul> */}
      <div>
        <Card>
          <h1>1번 상품</h1>
          <p>상품 설명입니다.</p>
          <Link to="/product/1">
            <img src="https://placehold.co/100" alt="1번상품 이미지" />
          </Link>
        </Card>

        <Card>
          <h1>2번 상품</h1>
          <p>상품 설명입니다.</p>
          <Link to="/product/2">
            <img src="src/assets/vite.svg" alt="1번상품 이미지" />
          </Link>
        </Card>
      </div>
    </main>
  );
}
