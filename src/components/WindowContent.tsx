function WindowContent() {
  return (
    <div className="w-full h-full flex">
      <div className="bg-red-500 items-center p-2 w-1/4 h-full">
        <p className="my-4">Projects</p>
        <p className="my-4">About</p>
        <p className="my-4">Games</p>
      </div>
      <div className="bg-green-500 p-2 w-3/4 h-full">
        <p>Hello</p>
      </div>
    </div>
  );
}

export default WindowContent;
