import { useCallback, useRef, useState, type CSSProperties, type MouseEvent, type RefObject } from "react";

interface WindowGeometry {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface UseWindowControllerOptions {
  initialTop: number;
  initialLeft: number;
  initialWidth?: number;
  initialHeight?: number;
  onActivate: () => void;
}

interface WindowControllerResult {
  style: CSSProperties;
  containerProps: { onMouseDown: () => void };
  dragHandleProps: { onMouseDown: (event: MouseEvent) => void };
  resizeHandleProps: { onMouseDown: (event: MouseEvent) => void };
}

const MIN_WIDTH = 200;
const MIN_HEIGHT = 150;
const DEFAULT_WIDTH = 320;
const DEFAULT_HEIGHT = 256;

function useWindowController(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    initialTop,
    initialLeft,
    initialWidth = DEFAULT_WIDTH,
    initialHeight = DEFAULT_HEIGHT,
    onActivate,
  }: UseWindowControllerOptions,
): WindowControllerResult {
  const [geometry, setGeometry] = useState<WindowGeometry>({
    top: initialTop,
    left: initialLeft,
    width: initialWidth,
    height: initialHeight,
  });

  const start = useRef({ x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 });

  const beginDrag = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      const target = containerRef.current;
      if (!target) return;
      onActivate();

      start.current = {
        x: event.clientX,
        y: event.clientY,
        top: target.offsetTop,
        left: target.offsetLeft,
        width: target.offsetWidth,
        height: target.offsetHeight,
      };

      const onMouseMove = (e: globalThis.MouseEvent) => {
        target.style.top = `${start.current.top + (e.clientY - start.current.y)}px`;
        target.style.left = `${start.current.left + (e.clientX - start.current.x)}px`;
      };

      const onMouseUp = () => {
        setGeometry((prev) => ({
          ...prev,
          top: parseInt(target.style.top) || prev.top,
          left: parseInt(target.style.left) || prev.left,
        }));
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [containerRef, onActivate],
  );

  const beginResize = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      const target = containerRef.current;
      if (!target) return;
      onActivate();

      start.current = {
        x: event.clientX,
        y: event.clientY,
        top: target.offsetTop,
        left: target.offsetLeft,
        width: target.offsetWidth,
        height: target.offsetHeight,
      };

      const onMouseMove = (e: globalThis.MouseEvent) => {
        const width = Math.max(MIN_WIDTH, start.current.width + (e.clientX - start.current.x));
        const height = Math.max(MIN_HEIGHT, start.current.height + (e.clientY - start.current.y));
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
      };

      const onMouseUp = () => {
        setGeometry((prev) => ({
          ...prev,
          width: parseInt(target.style.width) || prev.width,
          height: parseInt(target.style.height) || prev.height,
        }));
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [containerRef, onActivate],
  );

  return {
    style: {
      top: `${geometry.top}px`,
      left: `${geometry.left}px`,
      width: `${geometry.width}px`,
      height: `${geometry.height}px`,
    },
    containerProps: { onMouseDown: onActivate },
    dragHandleProps: { onMouseDown: beginDrag },
    resizeHandleProps: { onMouseDown: beginResize },
  };
}

export default useWindowController;
