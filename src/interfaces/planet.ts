import { type Moon } from "./moon";
import { type Satellite } from "./satellite";

export interface Planet {
  id: string;
  name: string;
  color: string;
  size: number; // Diameter of the planet in million km
  orbitRadius: number; // Radius in AU for the planet's orbit around the sun
  orbitDuration: number; // Duration in siderial days for one complete orbit
  moons?: Moon[];
  satellites?: Satellite[];
}
