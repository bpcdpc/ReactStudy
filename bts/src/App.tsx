import "./App.css";
import type { Member } from "./types/Member";
import MemberBox from "./components/MemberBox";

const members: Member[] = [
  { image: "/public/images/bts1.png", name: "RM", team: "BTS" },
  { image: "/public/images/bts2.png", name: "진", team: "BTS" },
  { image: "/public/images/bts3.png", name: "슈가", team: "BTS" },
  { image: "/public/images/bts4.png", name: "제이홉", team: "BTS" },
  { image: "/public/images/bts5.png", name: "지민", team: "BTS" },
  { image: "/public/images/bts6.png", name: "뷔", team: "BTS" },
  { image: "/public/images/bts7.png", name: "정국", team: "BTS" },
];

function App() {
  return <MemberBox members={members} />;
}

export default App;
