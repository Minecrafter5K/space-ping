"use client";

import React from "react";
import { type Planet } from "src/interfaces/planet";
import PlanetComponent from "./Planet";
import ConnectionComponent from "./Connection";
import { Connection } from "tristanjockel/interfaces/connection";

const planets: Planet[] = [
  {
    id: "planet-0",
    name: "Mercury",
    color: "#FFD700",
    size: 4.8,
    orbitRadius: 0.38,
    orbitDuration: 88,
  },
  {
    id: "planet-1",
    name: "Venus",
    color: "#FF6347",
    size: 12.1,
    orbitRadius: 0.72,
    orbitDuration: 224.7,
  },
  {
    id: "planet-2",
    name: "Erde",
    color: "#1E90FF",
    size: 12.8,
    orbitRadius: 1,
    orbitDuration: 365.3,
    moons: [
      {
        id: "moon-1",
        name: "Mond",
        color: "#CCCCCC",
        size: 3.5,
        orbitRadius: 30,
        orbitDuration: 40,
      },
    ],
  },
  {
    id: "planet-3",
    name: "Mars",
    color: "#FF4500",
    size: 6.8,
    orbitRadius: 1.52,
    orbitDuration: 686.7,
    moons: [
      {
        id: "moon-2",
        name: "Phobos",
        color: "#AAAAAA",
        size: 0.02,
        orbitRadius: 20,
        orbitDuration: 30,
      },
      {
        id: "moon-3",
        name: "Deimos",
        color: "#888888",
        size: 0.01,
        orbitRadius: 28,
        orbitDuration: 50,
      },
    ],
  },
  {
    id: "planet-4",
    name: "Jupiter",
    color: "#FF6347",
    size: 139.8,
    orbitRadius: 5.2,
    orbitDuration: 4333,
  },
  {
    id: "planet-5",
    name: "Saturn",
    color: "#FF6347",
    size: 116.5,
    orbitRadius: 9.58,
    orbitDuration: 10759,
  },
  {
    id: "planet-6",
    name: "Uranus",
    color: "#FF6347",
    size: 50.7,
    orbitRadius: 19.14,
    orbitDuration: 30687,
  },
  {
    id: "planet-7",
    name: "Neptun",
    color: "#FF6347",
    size: 49.2,
    orbitRadius: 30.2,
    orbitDuration: 60190,
  },
];

const connections: Connection[] = [
  {
    id: "connection-0",
    latency: "30ms",
    endpoint1: "planet-0",
    endpoint2: "planet-1",
  },
  {
    id: "connection-1",
    latency: "40ms",
    endpoint1: "planet-1",
    endpoint2: "planet-2",
  },
  {
    id: "connection-2",
    latency: "50ms",
    endpoint1: "planet-0",
    endpoint2: "planet-2",
  },
  {
    id: "connection-3",
    latency: "10ms",
    endpoint1: "planet-2",
    endpoint2: "moon-1",
  },
  {
    id: "connection-4",
    latency: "500ms",
    endpoint1: "moon-1",
    endpoint2: "planet-3",
  },
];

export default function SolarSystem() {
  return (
    <svg width="600" height="600">
      {/* Mittelpunkt (Sonne) */}
      <circle cx="300" cy="300" r="20" fill="yellow" />
      <g transform="translate(300,300)">
        {planets.map((planet) => (
          <PlanetComponent key={planet.id} planet={planet} />
        ))}
      </g>
      {/* Verbindungen zwischen Planeten/Monde */}
      {connections.map((connection) => (
        <ConnectionComponent
          key={connection.id}
          connection={connection}
          planets={planets}
        />
      ))}
      <style jsx global>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </svg>
  );
}
