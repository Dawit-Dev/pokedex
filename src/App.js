import React from "react";
import Logo from "./Component/Logo";
import BestPokemon from "./Component/BestPokemon";
import CaughtPokemon from "./Component/CaughtPokemon";
import PokemonMovesSelector from "./Component/PokemonMovesSelector";
import PokemonCity from "./Component/PokemonCity";
import "./App.css";

function App() {
  const appName = "Dawit's Pokedex";
  const date = new Date().toLocaleDateString();
  const abilities = ["Anticipation", "Adaptabiltily", "Run Away"];

   const logWhenClicked = () => {
     console.log("Log button was clicked!");
   };

  return (
    <div className="App">
      <Logo appName={appName} handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
