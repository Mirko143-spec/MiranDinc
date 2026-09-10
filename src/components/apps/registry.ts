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

export interface AppContentProps {
  title: string;
  content?: string;
  section?: ExplorerSection;
  openWindow?: (appType: AppType, title: string, content?: string) => void;
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
