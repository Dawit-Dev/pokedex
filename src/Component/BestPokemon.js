import React from "react";

const BestPokemon = (props) => {

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <h2 key={index}>{ability}</h2>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;