import "./Header.css";

export default function Heading() {
  return (
    <header className="header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </header>
  );
}
