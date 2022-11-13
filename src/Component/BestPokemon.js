import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptabiltily", "Run Away"];

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;