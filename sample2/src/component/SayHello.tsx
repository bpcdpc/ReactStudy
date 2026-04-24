interface SayHelloProps {
  myName: string;
  to: string;
}

function SayHello({ myName, to }: SayHelloProps) {
  return (
    <>
      <h1>안녕하세요. {myName}</h1>
      <h1>Hello, {to}!</h1>
    </>
  );
}

export default SayHello;
