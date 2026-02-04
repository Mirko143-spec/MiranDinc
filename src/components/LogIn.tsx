import { useState } from "react";
import profile from "../assets/profile.jpeg";

interface LogInProps {
  handleLogin: () => void;
}

function LogIn({ handleLogin }: LogInProps) {
  const [loading, setLoading] = useState<boolean>(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      handleLogin();
      setLoading(false);
    }, 1000);
  }
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="h-72 w-[36rem] bg-transparent flex flex-col justify-center items-center rounded-2xl text-gray-100 p-4">
        <img src={profile} alt="Profile picture" className="w-36 rounded-2xl" />
        <h1 className="text-2xl text-slate-100 mb-8 mt-4">Miran</h1>
        <form
          onSubmit={handleSubmit}
          className="my-auto flex flex-col items-center justify-center"
        >
          {loading ? (
            "Loading..."
          ) : (
            <div className="flex flex-col items-center">
              <input
                placeholder="Password.."
                className="p-4 outline-none focus:placeholder-transparent rounded-2xl h-12 mx-4 text-slate-400"
                type="password"
                autoFocus
              />
              <p className="text-sm opacity-75">Hint: any password works</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default LogIn;
