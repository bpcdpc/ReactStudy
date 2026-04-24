import "./App.css";

// import Counter from "./components/Counter";
import CounterClass from "./components/Counter";
import LiveInput from "./components/LiveInput";
import ParentComponent from "./components/ParentComponent";
import StateComponent from "./components/StateComponent";

function App() {
  // return <Counter init={0} />;
  return (
    <>
      <CounterClass init={0} />
      <LiveInput />
      <ParentComponent />
      <StateComponent />
    </>
  );
}

export default App;
