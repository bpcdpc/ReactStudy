type LoginButtonProps = {
  content: string;
  action: () => void;
};
export default function LoginButton({ content, action }: LoginButtonProps) {
  return <button onClick={action}>{content}</button>;
}
