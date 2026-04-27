type GreetProps = {
  isLoggedIn: boolean;
};

function UserGreet() {
  return <h1>안녕하세요, 다시 오셨군요!</h1>;
}

function GuestGreet() {
  return <h1>회원 가입을 하세요.</h1>;
}

export default function Greet({ isLoggedIn }: GreetProps) {
  return isLoggedIn ? <UserGreet /> : <GuestGreet />;
}
