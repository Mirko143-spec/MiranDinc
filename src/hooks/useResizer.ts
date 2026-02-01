import { useEffect } from "react";

function useResizer(id: string): void {
  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) return;

    const resizeHandle = target.querySelector(".resize-handle") as HTMLElement;
    if (!resizeHandle) return;

    let isResizing = false;
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    const onMouseDown = (e: MouseEvent) => {
      e.stopPropagation();
      isResizing = true;
      startX = e.clientX;
      startY = e.clientY;
      startWidth = target.offsetWidth;
      startHeight = target.offsetHeight;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const width = Math.max(200, startWidth + (e.clientX - startX));
      const height = Math.max(150, startHeight + (e.clientY - startY));

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
    };

    const onMouseUp = () => {
      isResizing = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    resizeHandle.addEventListener("mousedown", onMouseDown);

    return () => {
      resizeHandle.removeEventListener("mousedown", onMouseDown);
    };
  }, [id]);
}

export default useResizer;
