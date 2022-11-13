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

      <Mentor />
      <Weather />
      <Name />
      <MentorsList />
    </div>
  );
}




////////////
function Mentor() {
  const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];
  return <span>{mentors.join(", ")}</span>;
}
function Weather() {
  const weatherData = {
    temperature: 5,
    location: "London",
  };

  return (
    <p>
      The temperature in {weatherData.location} is {weatherData.temperature}
    </p>
  );
}
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function Name() {
  const user = {
    firstName: "Bob",
    lastName: "Marley",
  };
  return <span>{formatName(user)}</span>;
}
const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];

function MentorsList() {
  return (
    <ul>
      {mentors.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}

export default App;
