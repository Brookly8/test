import React from "react";
import "./Gallery.css";
import { getPerson } from "../../api/api";
export function Gallery({ state, setState }) {
  const onClickHendler = () => {
    getPerson(state, setState);
  };
  return (
    <>
      <div className="top">
        <header>People Gallery:</header>
        <button onClick={onClickHendler}>Get New Person</button>
      </div>
      <div className="personList">
        {state.map((person, index) => (
          <div className="user" key={person.results[0].id.value}>
            <img
              src={person.results[0].picture.large}
              alt={`Person ${index + 1}`}
            />
            <h3>
              {person.results[0].name.title}, {person.results[0].name.first}{" "}
              {person.results[0].name.last}
            </h3>
            <p>Age: {person.results[0].dob.age}</p>
            <p>
              {person.results[0].location.country},{" "}
              {person.results[0].location.city}
            </p>
            <div>Cell Phone: {person.results[0].cell}</div>
          </div>
        ))}
      </div>
    </>
  );
}
