import type { Member } from "../types/Member";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  const { image, name, team } = member;
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{team}</p>
    </div>
  );
}
