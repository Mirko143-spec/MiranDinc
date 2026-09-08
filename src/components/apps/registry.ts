import type { ComponentType } from "react";
import DefaultApp from "./DefaultApp";
import PokeDexApp from "./PokeDexApp";
import AboutFolderApp from "./AboutFolderApp";
import ProjectsFolderApp from "./ProjectsFolderApp";
import GamesFolderApp from "./GamesFolderApp";
import FileViewerApp from "./FileViewerApp";

export type AppType =
  | "trash"
  | "projects"
  | "about"
  | "chrome"
  | "spotify"
  | "games"
  | "steam"
  | "pokedex"
  | "file";

export interface AppContentProps {
  title: string;
  content?: string;
  openWindow?: (appType: AppType, title: string, content?: string) => void;
}

export const APP_REGISTRY: Record<AppType, ComponentType<AppContentProps>> = {
  trash: DefaultApp,
  projects: ProjectsFolderApp,
  about: AboutFolderApp,
  chrome: DefaultApp,
  spotify: DefaultApp,
  games: GamesFolderApp,
  steam: DefaultApp,
  pokedex: PokeDexApp,
  file: FileViewerApp,
};
