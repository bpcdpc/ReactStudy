import { useEffect, useState } from "react";
import type { User } from "./UserList";

export default function UserListAsyncAwait() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) throw new Error('요청 실패');
                
                const data: User[] = await res.json();
                setUsers(data);
            }
            catch (error) {
                if (error instanceof Error) setError(error.message);
            }
        };

        load();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <ul>
            {users.map((user) => <li key={user.id}>{user.name} ({user.email})</li>)}
        </ul>
    );
}