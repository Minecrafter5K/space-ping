import React from "react";
import { type Moon } from "src/interfaces/moon";
import SatelliteComponent from "./Satellite";

interface MoonProps {
  moon: Moon;
}

const MoonComponent: React.FC<MoonProps> = ({ moon }) => {
  const moonSize = moon.size * 2;

  return (
    <div
      className="absolute rounded-full border-gray-500"
      style={{
        width: moon.orbitRadius * 2,
        height: moon.orbitRadius * 2,
        marginLeft: -moon.orbitRadius,
        marginTop: -moon.orbitRadius,
        animation: `orbit ${moon.orbitDuration}s linear infinite`,
        left: "50%",
        top: "50%",
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: moon.color,
          width: moonSize,
          height: moonSize,
          top: ` -${moonSize / 2}px`,
          left: `calc(50% - ${moonSize / 2}px)`,
        }}
      >
        {/* {moon.satellites?.map((satellite) => (
          <SatelliteComponent key={satellite.id} satellite={satellite} />
        ))} */}
      </div>
    </div>
  );
};

export default MoonComponent;
