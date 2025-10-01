import logo from "./SheCodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="shecodeslogo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
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
