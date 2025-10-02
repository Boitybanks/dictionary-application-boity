import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [definition, setDefinition] = useState("");

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
    // better way to log the first definition:
    setDefinition(response.data); // Use the first result if it's an array
  }
  function handleSubmit(event) {
    event.preventDefault();
    // alert(`Searching for: ${keyword}`); // Optional: remove for production
    const apiKey = "0fcte29ba005o3984f3f24530ff18441";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  return (
    <div>
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" value={keyword} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </form>
        <div className="Dictionary-section">
          <p>
            <Results keyword={keyword} definition={definition} />
          </p>
        </div>
      </div>
    </div>
  );
}
