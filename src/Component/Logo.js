import React from "react";
import Title from "./Title";

const Avatar = (props) => {
  // const logWhenClicked = () => {
  //   console.log("Log button was clicked!");
  // };

  return (
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      onClick={props.handleClick}
      alt=""
    />
  );
};

const Logo = ({ appName, handleClick }) => {
  return (
    <div>
      <header>
        <Title appName={appName} fabulous="true" />
        {/* <Avatar onClick={logWhenClicked}>Click me!</Avatar> */}
        <Avatar handleClick={handleClick} />
      </header>
    </div>
  );
};

export default Logo;
