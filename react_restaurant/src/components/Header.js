import React from "react";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

export const Header = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => setOffset(window.pageYOffset);
    console.log(offset);
  }, [offset]);

  const myStyle = {
    position: "fixed",
    top: "0"
  };

  return (
    <>
      <header
        className="App-header"
        style={offset > window.innerHeight ? myStyle : {}}
      >
        <animated.nav></animated.nav>
      </header>
    </>
  );
};
