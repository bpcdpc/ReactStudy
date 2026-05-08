// import "./App.css";

import Library from "./component/Library";
import SayHello from "./component/SayHello";
import Hello from "./component/Hello";
import HelloTo from "./component/HelloTo";

import Card from "./component/Card";
import EventBasic from "./component/EventBasic";
import LoginControl from "./component/LoginControl";
import StateForm from "./component/StateForm";
import StateFormUC from "./component/StateFormUC";
import ReactMemoTest from "./component/ReactMemoTest";

function App() {
  return (
    <>
      <ReactMemoTest />
      {/* <StateForm />
      <StateFormUC />
      <EventBasic format="date" />
      <EventBasic format="time" />
      <EventBasic format="datetime" />
      <Library />
      <SayHello myName="빈영" to="선우" />
      <HelloTo name="빈영" age="46" width="100px" height="100px" />
      <HelloTo name="선우" age="8" width="50px" height="50px" />
      <LoginControl />
      <Card>
        <h1>카드 제목입니다.</h1>
        <p>카드 설명입니다.</p>
      </Card>
      <Card>
        <h1>카드 제목입니다.</h1>
        <h2>카드 부제목입니다.</h2>
        <img src="https://placehold.co/100" alt="sample" />
      </Card>
      <Card>
        <h1>카드 제목입니다.</h1>
        <p>카드 설명입니다.</p>
        <img src="src/assets/vite.svg" alt="vite" />
      </Card> */}
    </>
  );
}

export default App;
