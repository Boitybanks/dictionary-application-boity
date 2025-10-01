import React from "react";
import logo from "./SheCodes.png";
import Dictionary from "./Dictionary";
import "./App.css";

/**
 * The main application component.
 *
 * This component renders the main application layout,
 * including the header, main content area, and footer.
 *
 * The header contains the SheCodes logo and a welcome message.
 * The main content area contains a heading asking the user what word they want to look up,
 * and a Dictionary component pre-populated with the default keyword "sunset".
 * The footer contains links to the project's GitHub repository and Netlify hosting page.
 */
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="shecodeslogo" alt="logo" />
          <p> Welcome to my dictionary app! </p>
          please enter a word below
          <Dictionary defaultKeyword="sunset" />
        </header>

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
    </div>
  );
}
