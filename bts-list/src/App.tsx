import "./App.css";

import type { Member } from "./types/Member";
import MemberCard from "./components/MemberCard";

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
  return (
    <>
      <h1>💜 Who's Who? 💜</h1>
      <h2>⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖</h2>
      <div className="member-cards">
        {members.map((m) => (
          // <MemberCard image={m.image} name={m.name} team={m.team} />
          <MemberCard member={m} />
        ))}
      </div>
    </>
  );
}

export default App;
