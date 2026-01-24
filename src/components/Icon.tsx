interface PropTypes {
  fileIcon: string;
  fileName: string;
}

function Icon({ fileIcon, fileName }: PropTypes) {
  return (
    <>
      <div className="btn-group">
        <button
          style={{
            margin: "1rem 1.8rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={fileIcon}
            alt={fileName}
            style={{
              width: "4rem",
            }}
          />
        </button>
        <p className="icon-p">{fileName}</p>
      </div>
    </>
  );
}

export default Icon;
