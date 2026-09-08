import Icon from "../Icon";
import picture from "../../assets/picture.png";
import type { FileEntry } from "../../data/types";
import type { AppType } from "./registry";

interface FileGridProps {
  files: FileEntry[];
  openWindow?: (appType: AppType, title: string, content?: string) => void;
}

function FileGrid({ files, openWindow }: FileGridProps) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-4">
      {files.map((file) => (
        <Icon
          key={file.id}
          fileIcon={picture}
          fileName={file.fileName}
          onDoubleClick={
            file.content !== undefined
              ? () => openWindow?.("file", file.fileName, file.content)
              : undefined
          }
        />
      ))}
    </div>
  );
}

export default FileGrid;
