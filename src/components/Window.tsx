import useDragger from "../hooks/useDragger";
import useResizer from "../hooks/useResizer";

interface WindowProps {
  id: string;
  initialTop: number;
  initialLeft: number;
  title: string;
  onClose: () => void;
}

function Window({ id, initialTop, initialLeft, title, onClose }: WindowProps) {
  useDragger(id);
  useResizer(id);

  return (
    <div
      id={id}
      className="bg-gray-800 text-white shadow-2xl rounded-xl border-2 border-gray-700 overflow-hidden relative transition duration-300 ease-in-out"
      style={{
        position: "absolute",
        top: `${initialTop}px`,
        left: `${initialLeft}px`,
        width: "20rem",
        height: "16rem",
        zIndex: 1000,
      }}
    >
      <div
        className="resize-handle absolute bottom-[6px] right-[6px] w-2 h-2 bg-gray-600 hover:bg-gray-500 cursor-se-resize border border-gray-500 z-20"
        title="Resize"
      />
      <div className="drag-handle h-8 bg-gray-700 flex items-center px-3 text-sm font-semibold cursor-move select-none border-b border-gray-600">
        <span className="truncate flex-1">{title}</span>
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
        className="p-4 bg-gray-800 cursor-default select-none"
        style={{ height: "calc(100% - 2rem)", overflow: "auto" }}
      >
        <p className="text-gray-300 text-sm mb-2">Welcome to {title}!</p>
        <p className="text-gray-400 text-xs">
          This is a draggable window prototype for my portfolio.
        </p>
      </div>
    </div>
  );
}

export default Window;
