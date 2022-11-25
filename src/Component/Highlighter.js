import React, { useState } from "react";

function Highlighter(props) {
  const [color, setColor] = useState("red");
  function highlightPurple() {
    setColor("purple");
  }

  return (
    <span className={color} onClick={highlightPurple}>
      {props.word}
    </span>
  );
}

export default Highlighter;
