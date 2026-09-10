import type { WindowState } from "../hooks/useWindowManager";
import { APP_ICONS } from "./apps/appIcons";

interface TaskbarProps {
  windows: WindowState[];
  onSelect: (id: string) => void;
}

function Taskbar({ windows, onSelect }: TaskbarProps) {
  const maxZIndex = Math.max(0, ...windows.map((w) => w.zIndex));

  return (
    <ul className="flex flex-row items-center gap-2 list-none px-2 overflow-x-auto">
      {windows.map((w) => (
        <li key={w.id}>
          <button
            onClick={() => onSelect(w.id)}
            className={`flex items-center gap-1 h-8 px-2 border-0 border-b-2 border-white/40 cursor-pointer outline-none ${
              w.zIndex === maxZIndex ? "bg-white/20 border-white" : "bg-transparent"
            }`}
          >
            <img src={APP_ICONS[w.appType]} alt={w.title} className="w-5 h-5" />
            <span className="max-w-20 truncate text-xs text-white">{w.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Taskbar;
