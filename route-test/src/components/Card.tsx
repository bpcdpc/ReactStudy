import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}
export default function Card({ children }: CardProps) {
  const cardStyle: React.CSSProperties = {
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    backgroundColor: "#222",
    display: "flex",
    // flexDirection: "column",
    alignItems: "flex-start",
  };
  return <div style={cardStyle}>{children}</div>;
}
