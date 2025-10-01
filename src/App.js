import React from "react";
import logo from "./SheCodes.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="shecodeslogo" alt="logo" />
          <p> Welcome to my dictionary app! by Boity </p>
        </div>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <div className="text-center">
          <small>
            This project was coded by Boity and is{" "}
            <a
              href="https://github.com/Boitybanks/dictionary-application-boity"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionaryapplicationboity.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}
