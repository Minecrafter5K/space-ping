import { type Satellite } from "./satellite";

export interface Moon {
  id: string;
  name: string;
  color: string;
  size: number; // Diameter of the moon in million km
  orbitRadius: number; // Radius in pixels for the moon's orbit around its planet
  orbitDuration: number; // Duration in seconds for one complete orbit
  satellites?: Satellite[];
}
