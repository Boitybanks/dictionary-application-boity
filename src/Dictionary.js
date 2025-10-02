import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [definition, setDefinition] = useState("");
  const [photos, setPhotos] = useState([]);

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
    // better way to log the first definition:
    setDefinition(response.data); // Use the first result if it's an array
  }
  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // alert(`Searching for: ${keyword}`); // Optional: remove for production
    const apiKey = "0fcte29ba005o3984f3f24530ff18441";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey = "0fcte29ba005o3984f3f24530ff18441";
    let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;
    console.log(pexelsApiUrl);

    axios.get(pexelsApiUrl).then(handlePexelsResponse);
  }

  return (
    <div>
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" value={keyword} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </form>
        <div className="Dictionary-section">
          <Results keyword={keyword} definition={definition} photos={photos} />
        </div>
      </div>
    </div>
  );
}
