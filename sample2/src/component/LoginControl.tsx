import { useState } from "react";
import Greet from "./Greet";
import LoginButton from "./LoginButton";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoggedIn((p) => !p);
  };

  return (
    <>
      <Greet isLoggedIn={isLoggedIn} />
      <LoginButton
        content={isLoggedIn ? "로그아웃" : "로그인"}
        action={handleClick}
      />
      {/* {isLoggedIn ? (
        <LoginButton content={"로그아웃"} action={handleClick} />
      ) : (
        <LoginButton content={"로그인"} action={handleClick} />
      )} */}
    </>
  );
}
