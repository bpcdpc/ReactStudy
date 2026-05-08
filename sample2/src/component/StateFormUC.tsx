import { useRef } from "react";

export default function StateFormUC() {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `안녕하세요. ${name.current?.value} (${age.current?.value}) 님!`,
    );
  };

  console.log("StateFormUC rerendered!");

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>이름</span>
        <input type="text" name="name" ref={name} defaultValue={""} />
      </label>
      <label>
        <span>나이</span>
        <input type="number" name="age" ref={age} defaultValue={0} />
      </label>
      <button type="submit">보내기</button>
      <p>
        안녕하세요, {name.current?.value} ({age.current?.value}) 님!
      </p>
    </form>
  );
}
