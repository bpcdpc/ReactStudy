import type { Member } from "../types/Member";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  const { image, name, team } = member;
  return (
    <div className="member-card">
      <img className="image" src={image} alt={name} />
      <h3 className="name">{name}</h3>
      <p className="team">{team}</p>
    </div>
  );
}
