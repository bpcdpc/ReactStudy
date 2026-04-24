// import Lightening from "./Lightening";
import Image from "./Image";

interface HelloToProps {
  name: string;
  age: string;
  width: string;
  height: string;
}

function HelloTo(props: HelloToProps) {
  return (
    <>
      <Image
        url={"public/favicon.svg"}
        width={props.width}
        height={props.height}
      />
      <h1>안녕하세요</h1>
      <h2>Hello, {props.name}</h2>
      <p>저는 {props.age}살 이에요.</p>
    </>
  );
}

export default HelloTo;
