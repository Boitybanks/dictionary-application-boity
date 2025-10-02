import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./SheCodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="App-title text-center mt-5">Dictionary</h1>
          <img src={logo} className="shecodeslogo img-fluid" alt="logo" />
          <p className="text-center">What word do you want to look up?</p>
          <Dictionary defaultKeyword="hello" />
        </header>

        <footer className="App-footer">
          <small className="text-center d-block mb-3">
            Coded by <strong>Boitumelo Mbhele</strong> 🔥 | Open-sourced on{" "}
            <a
              href="https://github.com/Boitybanks/dictionary-application-boity"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionaryapplicationboity.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
