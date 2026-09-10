import type { AppContentProps } from "./registry";

function FileViewerApp({ title, content }: AppContentProps) {
  return (
    <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">
      {content ?? `No content in ${title}.`}
    </pre>
  );
}

export default FileViewerApp;
