import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";
import CounterButtons from "./counterButtons";
import CounterValue from "./CounterValue";
import UserInput from "./UserInput";
import UserName from "./UserName";

function App() {
  return (
    <Provider store={store}>
      <CounterValue />
      <CounterButtons />
      <UserName />
      <UserInput />
    </Provider>
  );
}

export default App;
