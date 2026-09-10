import { useState } from "react";
import type { AppContentProps, ExplorerSection } from "./registry";
import FileGrid from "./FileGrid";
import folder from "../../assets/folder.png";
import { aboutFiles } from "../../data/aboutFiles";
import { projectsFiles } from "../../data/projectsFiles";
import { gamesFiles } from "../../data/gamesFiles";
import type { FileEntry } from "../../data/types";

interface SectionDef {
  id: ExplorerSection;
  label: string;
  files: FileEntry[];
}

const SECTIONS: SectionDef[] = [
  { id: "about", label: "About", files: aboutFiles },
  { id: "projects", label: "Projects", files: projectsFiles },
  { id: "games", label: "Games", files: gamesFiles },
];

function FileExplorerApp({ section, openWindow }: AppContentProps) {
  const [selected, setSelected] = useState<ExplorerSection>(section ?? "about");
  const [prevSection, setPrevSection] = useState(section);

  if (section && section !== prevSection) {
    setPrevSection(section);
    setSelected(section);
  }

  const active = SECTIONS.find((s) => s.id === selected) ?? SECTIONS[0];

  return (
    <div className="flex h-full">
      <nav className="w-36 shrink-0 border-r-2 border-gray-700 bg-gray-900/40 py-2 overflow-y-auto">
        <ul className="list-none">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => setSelected(s.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left border-0 cursor-pointer ${
                  s.id === selected ? "bg-white/20 text-white" : "bg-transparent text-gray-300"
                }`}
              >
                <img src={folder} alt="" className="w-5 h-5 shrink-0" />
                <span className="truncate min-w-0">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 p-4 overflow-y-auto">
        <FileGrid files={active.files} openWindow={openWindow} />
      </div>
    </div>
  );
}

export default FileExplorerApp;
