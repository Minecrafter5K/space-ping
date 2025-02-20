import React from "react";
import { type Satellite } from "src/interfaces/satellite";

interface SatelliteProps {
  satellite: Satellite;
}

const satelliteDotSize = 6; // Diameter of the satellite dot in pixels

const SatelliteComponent: React.FC<SatelliteProps> = ({ satellite }) => {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: satellite.orbitRadius * 2,
        height: satellite.orbitRadius * 2,
        marginLeft: -satellite.orbitRadius,
        marginTop: -satellite.orbitRadius,
        animation: `orbit ${satellite.orbitDuration}s linear infinite`,
        left: "50%",
        top: "50%",
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: satellite.color,
          width: satelliteDotSize,
          height: satelliteDotSize,
          top: ` -${satelliteDotSize / 2}px`,
          left: `calc(50% - ${satelliteDotSize / 2}px)`,
        }}
      ></div>
    </div>
  );
};

export default SatelliteComponent;
