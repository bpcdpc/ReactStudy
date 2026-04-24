import type { Member } from "../types/Member";

interface MemberCardProps {
  member: Member;
}
export default function MemberCard({ member }: MemberCardProps) {
  const { image, name, team } = member;
  return (
    <div className="member-card">
      <img className="image" src={image} alt={name} />
      <h2 className="name">{name}</h2>
      <p className="team">{team}</p>
    </div>
  );
}
