import { useRef, useEffect } from "react";

function useDragger(id: string): void {
  const isClicked = useRef<boolean>(false);
  const zIndexCounter = useRef(1000);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) return;

    const dragHandle = target.querySelector<HTMLDivElement>(".drag-handle");
    if (!dragHandle) return;

    const onWindowClick = () => {
      zIndexCounter.current += 1;
      target.style.zIndex = `${zIndexCounter.current}`;
    };

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;

      coords.current.lastX =
        parseInt(target.style.left || "0") || target.offsetLeft;
      coords.current.lastY =
        parseInt(target.style.top || "0") || target.offsetTop;

      zIndexCounter.current += 1;
      target.style.zIndex = `${zIndexCounter.current}`;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mouseup", onMouseUp);
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = parseInt(target.style.left || "0") || 0;
      coords.current.lastY = parseInt(target.style.top || "0") || 0;

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    dragHandle.addEventListener("mousedown", onMouseDown);
    target.addEventListener("click", onWindowClick);

    const cleanup = () => {
      dragHandle.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("click", onWindowClick);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseup", onMouseUp);
    };

    return cleanup;
  }, [id]);
}

export default useDragger;
