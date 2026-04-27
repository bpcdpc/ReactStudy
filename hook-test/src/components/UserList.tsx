import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data: User[]) => setUsers(data));
    const load = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`Error ${res.status}: Request Failed`);
        console.log(res.status);
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) setErrors(err.message);
      }
    };
    load();
  }, []);

  if (errors) return <p>{errors}</p>;

  return (
    <>
      <h1>회원 목록</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} : {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
