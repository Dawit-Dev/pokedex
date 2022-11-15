import React from "react";
import Logo from "./Component/Logo";
import BestPokemon from "./Component/BestPokemon";
import CaughtPokemon from "./Component/CaughtPokemon";
import "./App.css";

function App() {
  const appName = "Dawit's Pokedex";
  const date = new Date().toLocaleDateString();
  const abilities = ["Anticipation", "Adaptabiltily", "Run Away"];



  return (
    <div className="App">
      <Logo appName={appName} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
