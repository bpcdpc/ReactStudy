import { useState } from "react";
import type { Member } from "../types/Member";
import MemberCard from "./MemberCard";

const members: Member[] = [
  { id: 0, image: "/public/images/bts1.png", name: "RM", team: "BTS" },
  { id: 1, image: "/public/images/bts2.png", name: "진", team: "BTS" },
  { id: 2, image: "/public/images/bts3.png", name: "슈가", team: "BTS" },
  { id: 3, image: "/public/images/bts4.png", name: "제이홉", team: "BTS" },
  { id: 4, image: "/public/images/bts5.png", name: "지민", team: "BTS" },
  { id: 5, image: "/public/images/bts6.png", name: "뷔", team: "BTS" },
  { id: 6, image: "/public/images/bts7.png", name: "정국", team: "BTS" },
];

// interface NextMemberProps {
//   next: () => void;
// }
// function NextMember({ next }: NextMemberProps) {
//   return (
//     <button className="arrow-btn" onClick={next}>
//       다음 ⏵
//     </button>
//   );
// }

// interface PrevMemberProps {
//   prev: () => void;
// }
// function PrevMember({ prev }: PrevMemberProps) {
//   return (
//     <button className="arrow-btn" onClick={prev}>
//       ⏴ 이전
//     </button>
//   );
// }

interface NavigationProps {
  content: string;
  move: () => void;
}
function Navigation({ content, move }: NavigationProps) {
  return (
    <button className="arrow-btn" onClick={move}>
      {/* ⏴ 이전 */}
      {content}
    </button>
  );
}

interface MemberBoxProp {
  init: number;
}
export default function MemberBox({ init }: MemberBoxProp) {
  const [memberId, setMemberId] = useState<number>(init);
  const prev = () => setMemberId((p) => p - 1);
  const next = () => setMemberId((p) => p + 1);
  return (
    <div>
      <div>
        {/* <MemberCard member={members[Math.abs(memberId % members.length)]} /> */}
        <MemberCard
          member={members[(memberId + members.length) % members.length]}
        />
        {/* <PrevMember prev={prev} />
      <NextMember next={next} /> */}
        <Navigation content={"⏴ 이전"} move={prev} />
        <Navigation content={"다음 ⏵"} move={next} />
      </div>

      <div>
        {members.map((m) => (
          <MemberCard member={m} key={m.id} />
        ))}
      </div>
    </div>
  );
}
