import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const size = searchParams.get("size");
  const page = searchParams.get("page");
  const location = useLocation();
  return (
    <div>
      <h3>#{id} 상품 페이지입니다.</h3>
      <p>query : {query}</p>
      <p>size : {size}</p>
      <p>page : {page}</p>
      <p>pathname : {location.pathname}</p>
      <p>search : {location.search}</p>
      <p>hash : {location.hash}</p>
    </div>
  );
}
