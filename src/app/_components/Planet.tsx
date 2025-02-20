import React from "react";
import { type Planet } from "tristanjockel/interfaces/planet";
import MoonComponent from "./Moon";

interface PlanetProps {
  planet: Planet;
}

export default function PlanetComponent({ planet }: PlanetProps) {
  const orbitRadiusPx = planet.orbitRadius * 150;

  return (
    <g transform={`translate(0,0)`}>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={`0 0 0`}
        to={`360 0 0`}
        dur={`${planet.orbitDuration}s`}
        repeatCount="indefinite"
      />
      {/* orbit */}
      <circle cx={0} cy={0} r={orbitRadiusPx} fill="none" stroke="gray" />

      <g transform={`translate(${orbitRadiusPx}, 0)`}>
        <circle cx={0} cy={0} r={planet.size} fill={planet.color} />
        {planet.moons?.map((moon) => (
          <MoonComponent key={moon.id} moon={moon} />
        ))}
        {/* {planet.satellites?.map((satellite) => (
          <SatelliteComponent key={satellite.id} satellite={satellite} />
        ))} */}
      </g>
    </g>
  );
}
