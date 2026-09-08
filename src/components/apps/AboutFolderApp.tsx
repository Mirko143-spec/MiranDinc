import type { AppContentProps } from "./registry";
import FileGrid from "./FileGrid";
import { aboutFiles } from "../../data/aboutFiles";

function AboutFolderApp({ openWindow }: AppContentProps) {
  return <FileGrid files={aboutFiles} openWindow={openWindow} />;
}

export default AboutFolderApp;
