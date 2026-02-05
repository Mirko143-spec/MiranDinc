import { useState } from "react";
import Desktop from "./components/Desktop.tsx";
import LogIn from "./components/LogIn.tsx";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
  }
  return (
    <>
      {loggedIn ? (
        <Desktop handleLogout={handleLogout} />
      ) : (
        <LogIn handleLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
