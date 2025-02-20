import React from "react";
import { type Planet } from "src/interfaces/planet";
import { type Connection } from "tristanjockel/interfaces/connection";
import useAnimationTime from "src/hooks/useAnimationTime";

interface ConnectionProps {
  connection: Connection;
  planets: Planet[];
}

interface Position {
  x: number;
  y: number;
}

// Berechnet dynamische Position mit Rotation basierend auf der globalen Animationszeit.
function getPositionById(
  id: string,
  planets: Planet[],
  animationTime: number,
): Position | null {
  for (const planet of planets) {
    if (planet.id === id) {
      const angle =
        ((animationTime % planet.orbitDuration) / planet.orbitDuration) *
        2 *
        Math.PI;
      return {
        x: 300 + planet.orbitRadius * 150 * Math.cos(angle),
        y: 300 + planet.orbitRadius * 150 * Math.sin(angle),
      };
    }
    if (planet.moons) {
      for (const moon of planet.moons) {
        if (moon.id === id) {
          const anglePlanet =
            ((animationTime % planet.orbitDuration) / planet.orbitDuration) *
            2 *
            Math.PI;
          const angleMoon =
            ((animationTime % moon.orbitDuration) / moon.orbitDuration) *
            2 *
            Math.PI;
          const planetPos = {
            x: 300 + planet.orbitRadius * 150 * Math.cos(anglePlanet),
            y: 300 + planet.orbitRadius * 150 * Math.sin(anglePlanet),
          };
          return {
            x:
              planetPos.x +
              moon.orbitRadius * Math.cos(anglePlanet + angleMoon),
            y:
              planetPos.y +
              moon.orbitRadius * Math.sin(anglePlanet + angleMoon),
          };
        }
      }
    }
  }
  return null;
}

export default function ConnectionComponent({
  connection,
  planets,
}: ConnectionProps) {
  const animationTime = useAnimationTime();
  const pos1 = getPositionById(connection.endpoint1, planets, animationTime);
  const pos2 = getPositionById(connection.endpoint2, planets, animationTime);

  if (!pos1 || !pos2) return null;

  // Berechne den Mittelpunkt der Linie
  const midX = (pos1.x + pos2.x) / 2;
  const midY = (pos1.y + pos2.y) / 2;
  // Berechne den Winkel in Grad
  const angleRad = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
  const angleDeg = (angleRad * 180) / Math.PI;
  // Drehe den Text um 180°, falls er "auf dem Kopf" steht.
  const rotation = angleDeg > 90 || angleDeg < -90 ? angleDeg + 180 : angleDeg;

  return (
    <>
      <line
        x1={pos1.x}
        y1={pos1.y}
        x2={pos2.x}
        y2={pos2.y}
        stroke="white"
        strokeDasharray="5,5"
      />
      <text
        x={midX}
        y={midY}
        fill="white"
        textAnchor="middle"
        alignmentBaseline="middle"
        transform={`rotate(${rotation}, ${midX}, ${midY}) translate(0, -10)`}
      >
        {connection.latency}
      </text>
    </>
  );
}
