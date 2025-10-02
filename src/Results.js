import React from "react";

export default function Results(props) {
  if (props.definition && props.definition.meanings) {
    return (
      <div className="Results">
        <h2>{props.definition.word}</h2>
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
      </div>
    );
  } else {
    return <p>No definition found</p>;
  }
}
