import { useState, useEffect } from "react";
import type { Movie } from "../types/Movie";
import type { MovieResponse } from "../types/Movie";
import MovieCard from "./MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json",
        );
        if (!res.ok) throw new Error(`Error ${res.status}: Request Failed.`);
        const data: MovieResponse = await res.json();
        setMovies(data.movies);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      }
    };
    load();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={container}>
      {movies?.map((m) => (
        <MovieCard movie={m} />
        //   <div style={card} key={m.id}>
        //     <img style={image} src={m.poster} alt={m.title} />
        //     <h2 style={title}>{m.title}</h2>
        //   </div>
      ))}
    </div>
  );
}

const container: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};
