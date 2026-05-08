import { useState } from "react";

interface Person {
  name: string;
  age: number | "";
}

export default function StateForm() {
  const [form, setForm] = useState<Person>({ name: "", age: "" });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`안녕하세요, ${form.name} (${form.age}) 님!`);
  };

  console.log("StateForm rerendered!");
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>이름</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInput}
        />
      </label>
      <label>
        <span>나이</span>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleInput}
        />
      </label>
      <button type="submit">보내기</button>
      <p>
        안녕하세요, {form.name} ({form.age}) 님!
      </p>
    </form>
  );
}
