import type { FileEntry } from "./types";

// No `content` yet — these are decorative placeholders for games
// that will eventually be playable (Snake, Pong). Double-clicking
// them currently does nothing.
export const gamesFiles: FileEntry[] = [
  { id: "snake", fileName: "Snake" },
  { id: "pong", fileName: "Pong" },
];
