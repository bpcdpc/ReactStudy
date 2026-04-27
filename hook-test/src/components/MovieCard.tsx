import type { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { id, title, poster } = movie;
  return (
    <div key={id} style={movieCard}>
      <img src={poster} alt={title} style={moviePoster} />
      <h2 style={movieTitle}>{title}</h2>
    </div>
  );
}

const movieCard: React.CSSProperties = {
  width: "200px",
  height: "360px",
  border: "1px solid #ddd",
  borderRadius: ".625rem",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  boxShadow: "3px 3px 10px rgba(0,0,0,.2)",
};

const moviePoster: React.CSSProperties = {
  width: "100%",
  height: "90%",
  objectFit: "cover",
  overflow: "hidden",
  objectPosition: "center center",
};

const movieTitle: React.CSSProperties = {
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.25rem",
  fontWeight: "bold",
  padding: "5px",
};
