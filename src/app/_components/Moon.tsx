import React from "react";
import { type Moon } from "src/interfaces/moon";

interface MoonProps {
  moon: Moon;
}

const MoonComponent: React.FC<MoonProps> = ({ moon }) => {
  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={`0 0 0`}
        to={`360 0 0`}
        dur={`${moon.orbitDuration}s`}
        repeatCount="indefinite"
      />
      <circle cx={moon.orbitRadius} cy={0} r={moon.size} fill={moon.color} />
      {/*
        Falls Satelliten hinzugefügt werden sollen, können hier SatelliteComponent(s) als <g> eingebettet werden.
        */}
    </g>
  );
};

export default MoonComponent;
