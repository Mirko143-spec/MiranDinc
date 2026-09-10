import folder from "../../assets/folder.png";
import trash from "../../assets/trash.png";
import chrome from "../../assets/chrome.png";
import spotify from "../../assets/spotify.png";
import steam from "../../assets/steam.png";
import pokedex from "../../assets/pokedex.png";
import picture from "../../assets/picture.png";
import type { AppType } from "./registry";

export const APP_ICONS: Record<AppType, string> = {
  trash,
  projects: folder,
  about: folder,
  chrome,
  spotify,
  games: folder,
  steam,
  pokedex,
  file: picture,
};
