import type { AppContentProps } from "./registry";

function DefaultApp({ title }: AppContentProps) {
  return (
    <>
      <p className="text-gray-300 text-sm mb-2">Welcome to {title}!</p>
      <p className="text-gray-400 text-xs">
        This is a draggable window prototype for my portfolio.
      </p>
    </>
  );
}

export default DefaultApp;
