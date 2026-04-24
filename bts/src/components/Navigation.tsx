interface NavButtonProps {
  content: string;
  move: () => void;
}
export default function NavButton({ content, move }: NavButtonProps) {
  return <button onClick={move}>{content}</button>;
}
