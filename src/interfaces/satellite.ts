export interface Satellite {
  id: string;
  name: string;
  color: string;
  orbitRadius: number; // Radius in pixels for the satellite's orbit around its moon
  orbitDuration: number; // Duration in seconds for one complete orbit
}
