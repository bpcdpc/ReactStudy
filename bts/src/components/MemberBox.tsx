import { useState } from "react";
import type { Member } from "../types/Member";
import MemberCard from "./MemberCard";
import NavButton from "./Navigation";

interface MemberBoxProps {
  members: Member[];
}
export default function MemberBox({ members }: MemberBoxProps) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);
  const len = members.length;

  return (
    <div>
      <MemberCard member={members[(index + len) % len]} />
      <NavButton content={"⏴ 이전"} move={prev} />
      <NavButton content={"다음 ⏵"} move={next} />
    </div>
  );
}
