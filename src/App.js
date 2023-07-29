import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/in/fatimah-adebimpe-441b10145"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fatimah Adebimpe
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/EniolaCodes/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
