import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);
    // Perform search with the keyword
    const apiKey = "0fcte29ba005o3984f3f24530ff18441";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div>
      <div className="Dictionary">
        {/* ...existing code... */}
        <form input-type="search" onSubmit={handleSubmit}>
          <input
            type="text"
            value={props.keyword}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
        <div className="Dictionary-section">
          <h2>{props.keyword}</h2>
          {/* ...existing code... */}
        </div>
      </div>
    </div>
  );
}
