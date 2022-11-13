import React from "react";
import Logo from "./Component/Logo";
import BestPokemon from "./Component/BestPokemon";
import CaughtPokemon from "./Component/CaughtPokemon";
import "./App.css";

function App() {
  return (
    <div /*className="App"*/>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
