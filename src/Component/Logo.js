import React from "react";
import Title from "./Title";

const Avatar = () => {
  return (
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      alt=""
    />
  );
};

const Logo = ({ appName }) => {
  return (
    <div>
      <header>
        <Title appName={appName} fabulous='true' />
        <Avatar />
      </header>
    </div>
  );
};

export default Logo;
