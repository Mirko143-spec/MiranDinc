interface PropTypes {
  fileIcon: string;
  fileName: string;
  onDoubleClick?: () => void;
}

function Icon({ fileIcon, fileName, onDoubleClick }: PropTypes) {
  return (
    <>
      <div className="items-center text-center">
        <button
          onDoubleClick={onDoubleClick}
          className="my-4 mx-[1.8rem] bg-transparent border-none cursor-pointer"
        >
          <img src={fileIcon} alt={fileName} className="w-16" />
        </button>
        <p className="text-xs">{fileName}</p>
      </div>
    </>
  );
}

export default Icon;
