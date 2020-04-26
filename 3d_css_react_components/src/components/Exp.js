import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./Exp.css";

export const Exp = () => {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: config.molasses }));
  const trans = (x, y) => `translate3d(${x / 5}px, ${y / 5}px, 0px)`;
  return (
    <div
      className="exp-scene"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="plain"
        style={{ transform: props.xy.interpolate(trans) }}
      >
        plain
      </animated.div>
    </div>
  );
};
