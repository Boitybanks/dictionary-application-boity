import logo from "./SheCodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img src={logo} className="shecodeslogo img-fluid" alt="logo" />
          <p>What word do you want to look up?</p>
          <Dictionary defaultKeyword="hello" />
        </header>

        <footer className="App-footer">
          <small>
            Coded by Boitumelo Mbhele 🔥 | Open-sourced on{" "}
            <a
              href="https://github.com/Boitybanks/dictionary-application-boity"
              target="_blank"
              rel="noreferrer"
            >
              GitHub and hosted on{" "}
              <a
                href="https://dictionaryapplicationboity.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Netlify
              </a>
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
