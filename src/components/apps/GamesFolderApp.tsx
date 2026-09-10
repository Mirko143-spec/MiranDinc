import type { AppContentProps } from "./registry";
import FileGrid from "./FileGrid";
import { gamesFiles } from "../../data/gamesFiles";

function GamesFolderApp({ openWindow }: AppContentProps) {
  return <FileGrid files={gamesFiles} openWindow={openWindow} />;
}

export default GamesFolderApp;
