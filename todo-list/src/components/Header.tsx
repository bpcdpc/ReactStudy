import React from "react";
import "./Header.css";
import WeatherDisplay from "./WeatherDisplay";

export default React.memo(function Header() {
  // console.log("Header 렌더링");
  return (
    <header className="header">
      <h3>오늘은 📆</h3>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {new Date().toDateString()}
        <WeatherDisplay />
      </h1>
    </header>
  );
});
