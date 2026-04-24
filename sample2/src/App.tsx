// import "./App.css";

// import Library from "./component/Library";
// import SayHello from "./component/SayHello";
// import Hello from "./component/Hello";
// import HelloTo from "./component/HelloTo";

import EventBasic from "./component/EventBasic";

function App() {
  return (
    <>
      <EventBasic format="date" />
      <EventBasic format="time" />
      <EventBasic format="datetime" />
      {/* <Library />
      <SayHello myName="빈영" to="선우" />
      <HelloTo name="빈영" age="46" width="100px" height="100px" />
      <HelloTo name="선우" age="8" width="50px" height="50px" /> */}
    </>
  );
}

export default App;
