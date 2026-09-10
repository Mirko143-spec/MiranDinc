import { useCallback, useRef, useState } from "react";
import type { AppType, ExplorerSection } from "../components/apps/registry";

export interface WindowState {
  id: string;
  appType: AppType;
  top: number;
  left: number;
  width?: number;
  height?: number;
  title: string;
  zIndex: number;
  content?: string;
  section?: ExplorerSection;
}

interface OpenOptions {
  section?: ExplorerSection;
  width?: number;
  height?: number;
}

interface WindowManager {
  windows: WindowState[];
  open: (appType: AppType, title: string, content?: string, options?: OpenOptions) => void;
  close: (id: string) => void;
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

  const open = useCallback(
    (appType: AppType, title: string, content?: string, options?: OpenOptions) => {
      setWindows((prev) => {
        if (appType === "explorer") {
          const existing = prev.find((w) => w.appType === "explorer");
          if (existing) {
            const zIndex = nextZIndex();
            return prev.map((w) =>
              w.id === existing.id
                ? { ...w, zIndex, section: options?.section ?? w.section }
                : w,
            );
          }
        }

        const count = prev.length;
        return [
          ...prev,
          {
            id: `window-${Date.now()}-${count}`,
            appType,
            top: BASE_TOP + count * BASE_OFFSET,
            left: BASE_LEFT + count * BASE_OFFSET,
            width: options?.width,
            height: options?.height,
            title,
            zIndex: nextZIndex(),
            content,
            section: options?.section,
          },
        ];
      });
    },
    [nextZIndex],
  );

  const close = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const bringToFront = useCallback(
    (id: string) => {
      const zIndex = nextZIndex();
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex } : w)));
    },
    [nextZIndex],
  );

  return { windows, open, close, bringToFront };
}

export default useWindowManager;
