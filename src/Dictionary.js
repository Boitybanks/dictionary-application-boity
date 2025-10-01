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
    // alert(`Searching for: ${keyword}`); // Optional: remove for production
    const apiKey = "0fcte29ba005o3984f3f24530ff18441";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div>
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" value={keyword} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </form>
        <div className="Dictionary-section">
          <h2>{keyword}</h2>
        </div>
      </div>
    </div>
  );
}
