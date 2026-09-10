import type { AppContentProps } from "./registry";
import FileGrid from "./FileGrid";
import { projectsFiles } from "../../data/projectsFiles";

function ProjectsFolderApp({ openWindow }: AppContentProps) {
  return <FileGrid files={projectsFiles} openWindow={openWindow} />;
}

export default ProjectsFolderApp;
