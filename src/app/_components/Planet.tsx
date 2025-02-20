import React from "react";
import { type Planet } from "tristanjockel/interfaces/planet";
import MoonComponent from "./Moon";
import SatelliteComponent from "./Satellite";

interface PlanetProps {
  planet: Planet;
}

export default function PlanetComponent({ planet }: PlanetProps) {
  const orbitRadiusPx = planet.orbitRadius * 150;
  const planetSize = planet.size * 2;
  const orbitDurationSec = planet.orbitDuration;

  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-gray-500"
      style={{
        width: orbitRadiusPx * 2,
        height: orbitRadiusPx * 2,
        marginLeft: -orbitRadiusPx,
        marginTop: -orbitRadiusPx,
        animation: `orbit ${orbitDurationSec}s linear infinite`,
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: planet.color,
          width: planetSize,
          height: planetSize,
          top: ` -${planetSize / 2}px`,
          left: `calc(50% - ${planetSize / 2}px)`,
        }}
      >
        {planet.moons?.map((moon) => (
          <MoonComponent key={moon.id} moon={moon} />
        ))}

        {planet.satellites?.map((satellite) => (
          <SatelliteComponent key={satellite.id} satellite={satellite} />
        ))}
      </div>
    </div>
  );
}
