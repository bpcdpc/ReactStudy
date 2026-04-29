import { useFetch } from "./CustomHook_Fetch";

type Movie = {
    id: number;
    title: string;
};

export default function CustomHook_02() {
    const url = 'https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json';
    const { data, loading } = useFetch<{ movies: Movie[] }>(url);

    if (loading)
        return (
            <p>loading...</p>
        );
    
    return (
        <ul>
            {data?.movies.map((m) => <li key={m.id}>{m.title}</li>)}
        </ul>
    );
}