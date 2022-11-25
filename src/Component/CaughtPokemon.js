import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const incrementCaught = () => {
    setCaught(caught + 1);
  };
  //
  const counter = () => {
    let pokemon = ["Charzard", "Pigeon", "Ditto"];
    const index = Math.floor(Math.random() * pokemon.length);
    setCaught(caught.concat(pokemon[index]));
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
        <button onClick={counter}>Click me</button>
      </p>
      <ul>
        {caught.map((pokemon, i) => <h2 key={i}>{pokemon}</h2>)}
      </ul>
    </div>
  );
};

export default CaughtPokemon;