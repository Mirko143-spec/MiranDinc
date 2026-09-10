import { useRef } from "react";
import useWindowController from "../hooks/useWindowController";
import {
  APP_REGISTRY,
  SECTION_LABELS,
  type AppType,
  type ExplorerSection,
  type OpenWindowOptions,
} from "./apps/registry";

interface WindowProps {
  appType: AppType;
  initialTop: number;
  initialLeft: number;
  initialWidth?: number;
  initialHeight?: number;
  title: string;
  zIndex: number;
  content?: string;
  section?: ExplorerSection;
  onClose: () => void;
  onActivate: () => void;
  openWindow?: (appType: AppType, title: string, content?: string, options?: OpenWindowOptions) => void;
}

function Window({
  appType,
  initialTop,
  initialLeft,
  initialWidth,
  initialHeight,
  title,
  zIndex,
  content,
  section,
  onClose,
  onActivate,
  openWindow,
}: WindowProps) {
  const Content = APP_REGISTRY[appType];
  const containerRef = useRef<HTMLDivElement>(null);
  const { style, containerProps, dragHandleProps, resizeHandleProps } = useWindowController(containerRef, {
    initialTop,
    initialLeft,
    initialWidth,
    initialHeight,
    onActivate,
  });
  const isExplorer = appType === "explorer";

  return (
    <div
      ref={containerRef}
      {...containerProps}
      className="bg-gray-800 text-white shadow-2xl rounded-xl border-2 border-gray-700 overflow-hidden relative transition duration-300 ease-in-out"
      style={{
        position: "absolute",
        zIndex,
        ...style,
      }}
    >
      <div
        {...resizeHandleProps}
        className="resize-handle absolute bottom-[6px] right-[6px] w-2 h-2 bg-gray-600 hover:bg-gray-500 cursor-se-resize border border-gray-500 z-20"
        title="Resize"
      />
      <div
        {...dragHandleProps}
        className="drag-handle h-8 bg-gray-700 flex items-center px-3 text-sm font-semibold cursor-move select-none border-b border-gray-600"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="truncate shrink-0">{title}</span>
          {isExplorer && section && (
            <>
              <span className="w-[2px] h-4 bg-white/20 shrink-0"></span>
              <span className="truncate min-w-0 text-xs font-normal text-gray-300">
                {SECTION_LABELS[section]}
              </span>
            </>
          )}
        </div>
        <div className="flex gap-1">
          <button
            className="w-4 h-4 bg-yellow-500 rounded-full hover:bg-yellow-400 mx-1"
            title="_"
          ></button>
          <button
            className="w-4 h-4 bg-red-500 rounded-full hover:bg-red-400 mx-1"
            title="x"
            onClick={onClose}
          ></button>
        </div>
      </div>

      <div
        className={`bg-gray-800 cursor-default select-none ${isExplorer ? "" : "p-4"}`}
        style={{ height: "calc(100% - 2rem)", overflow: isExplorer ? "hidden" : "auto" }}
      >
        <Content title={title} content={content} section={section} openWindow={openWindow} />
      </div>
    </div>
  );
}

export default Window;
