import React from "react";

export default function Results(props) {
  if (props.definition && props.definition.meanings) {
    return (
      <div className="Results">
        <h2>{props.definition.word}</h2>
        {props.definition.phonetic && (
          <p>
            <strong>Phonetic:</strong> {props.definition.phonetic}
          </p>
        )}
        <h3>Definitions:</h3>
        {props.definition.meanings.map((meaning, index) => (
          <div key={index}>
            <strong>{meaning.partOfSpeech}</strong>
            <p>{meaning.definition || "No definition found."}</p>
            <em>{meaning.example || "No example available."}</em>
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <p>
                <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
              </p>
            )}
            <hr />
          </div>
        ))}
        {props.photos && (
          <div className="Results-photos">
            <h3>Images:</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {props.photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo.src.landscape}
                  alt={photo.alt || props.definition.word}
                  style={{ width: "150px", borderRadius: "8px" }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <p>No definition found</p>;
  }
}
