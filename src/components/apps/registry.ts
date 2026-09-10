import type { ComponentType } from "react";
import DefaultApp from "./DefaultApp";
import PokeDexApp from "./PokeDexApp";
import FileExplorerApp from "./FileExplorerApp";
import FileViewerApp from "./FileViewerApp";

export type AppType =
  | "trash"
  | "explorer"
  | "chrome"
  | "spotify"
  | "steam"
  | "pokedex"
  | "file";

export type ExplorerSection = "about" | "projects" | "games";

export const SECTION_LABELS: Record<ExplorerSection, string> = {
  about: "About",
  projects: "Projects",
  games: "Games",
};

export interface OpenWindowOptions {
  section?: ExplorerSection;
  width?: number;
  height?: number;
}

export interface AppContentProps {
  title: string;
  content?: string;
  section?: ExplorerSection;
  openWindow?: (appType: AppType, title: string, content?: string, options?: OpenWindowOptions) => void;
}

export const APP_REGISTRY: Record<AppType, ComponentType<AppContentProps>> = {
  trash: DefaultApp,
  explorer: FileExplorerApp,
  chrome: DefaultApp,
  spotify: DefaultApp,
  steam: DefaultApp,
  pokedex: PokeDexApp,
  file: FileViewerApp,
};
