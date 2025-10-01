import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);
    // Perform search with the keyword
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
