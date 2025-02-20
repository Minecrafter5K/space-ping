import React from "react";
import { type Satellite } from "src/interfaces/satellite";

interface SatelliteProps {
  satellite: Satellite;
}

const satelliteDotSize = 6;

const SatelliteComponent: React.FC<SatelliteProps> = ({ satellite }) => {
  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={`0 0 0`}
        to={`360 0 0`}
        dur={`${satellite.orbitDuration}s`}
        repeatCount="indefinite"
      />
      <circle
        cx={satellite.orbitRadius}
        cy={0}
        r={satelliteDotSize / 2}
        fill={satellite.color}
      />
    </g>
  );
};

export default SatelliteComponent;
