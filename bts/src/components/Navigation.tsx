interface NavButtonProps {
  content: string;
  move: () => void;
}
export default function NavButton({ content, move }: NavButtonProps) {
  return (
    <button className="arrow-btn" onClick={move}>
      {content}
    </button>
  );
}
