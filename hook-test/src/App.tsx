// import { useState } from 'react'
// import "./App.css";

// import ClickCounter from "./components/ClickCounter";
// import Counter from "./components/Counter";
// import CleanupTest from "./components/CleanupTest";
// import UseEffectSample from "./components/UseEffectSample";
// import UserList from "./components/UserList";
// import Movies from "./components/Movies";
// import UseMemoSample from "./components/UseMemoSample";
// import UseCallbackSample from "./components/UseCallbackSample";
// import UseMemoTest from "./components/UseMemoTest";
import UseReducerSample from "./components/UseReducerSample";
import UseRefSample from "./components/UseRefSample";

function App() {
  return (
    <>
      {/* <ClickCounter count={0} />
      <UseEffectSample />
      <UserList />
      <Counter />
      <CleanupTest />
      <Movies />
      <UseMemoSample num={5} />
      <UseMemoTest />
      <UseCallbackSample /> */}
      <UseRefSample />
      <UseReducerSample />
    </>
  );
}

export default App;
