import type { ComponentType } from "react";
import DefaultApp from "./DefaultApp";
import PokeDexApp from "./PokeDexApp";

export type AppType =
  | "trash"
  | "projects"
  | "about"
  | "chrome"
  | "spotify"
  | "games"
  | "steam"
  | "pokedex";

export interface AppContentProps {
  title: string;
}

export const APP_REGISTRY: Record<AppType, ComponentType<AppContentProps>> = {
  trash: DefaultApp,
  projects: DefaultApp,
  about: DefaultApp,
  chrome: DefaultApp,
  spotify: DefaultApp,
  games: DefaultApp,
  steam: DefaultApp,
  pokedex: PokeDexApp,
};
