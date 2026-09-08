import { useCallback, useRef, useState } from "react";

export interface WindowState {
  id: string;
  top: number;
  left: number;
  title: string;
  zIndex: number;
}

interface WindowManager {
  windows: WindowState[];
  openNewWindow: (title: string) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
}

const BASE_TOP = 120;
const BASE_LEFT = 200;
const BASE_OFFSET = 45;

function useWindowManager(): WindowManager {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const zIndexCounter = useRef(1000);

  const nextZIndex = useCallback(() => {
    zIndexCounter.current += 1;
    return zIndexCounter.current;
  }, []);

  const openNewWindow = useCallback(
    (title: string) => {
      setWindows((prev) => {
        const count = prev.length;
        return [
          ...prev,
          {
            id: `window-${Date.now()}-${count}`,
            top: BASE_TOP + count * BASE_OFFSET,
            left: BASE_LEFT + count * BASE_OFFSET,
            title,
            zIndex: nextZIndex(),
          },
        ];
      });
    },
    [nextZIndex],
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const bringToFront = useCallback(
    (id: string) => {
      const zIndex = nextZIndex();
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex } : w)));
    },
    [nextZIndex],
  );

  return { windows, openNewWindow, closeWindow, bringToFront };
}

export default useWindowManager;
