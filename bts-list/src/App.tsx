import "./App.css";
import MemberBox from "./components/MemberBox";

function App() {
  return (
    <div className="container">
      <h1>💜 Who's Who? 💜</h1>
      <h2>⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖</h2>
      <div className="member-box">
        <MemberBox init={0} />
      </div>
    </div>
  );
}

export default App;
