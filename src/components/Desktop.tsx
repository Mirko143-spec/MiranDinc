import Icon from "./Icon.tsx";
import folder from "../assets/folder.png";
import trash from "../assets/trash.png";
import chrome from "../assets/chrome.png";
import spotify from "../assets/spotify.png";
import steam from "../assets/steam.png";
import pokedex from "../assets/pokedex.png";
import home from "../assets/home.png";
import lock from "../assets/Lock.png";
import DigitalClock from "./DigitalClock.tsx";
import Window from "./Window.tsx";
import { useState } from "react";

interface DesktopWindow {
  id: string;
  top: number;
  left: number;
  title: string;
}

interface DesktopProps {
  handleLogout: () => void;
}

function Desktop({ handleLogout }: DesktopProps) {
  const [menu, setMenu] = useState<boolean>(false);
  const [windows, setWindows] = useState<DesktopWindow[]>([]);
  const baseOffset = 45;

  function openNewWindow(windowName: string) {
    const count = windows.length;
    const id = `window-${Date.now()}-${count}`;
    setWindows((prev) => [
      ...prev,
      {
        id,
        top: 120 + count * baseOffset,
        left: 200 + count * baseOffset,
        title: windowName,
      },
    ]);
  }

  function closeWindow(id: string) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  function handleClick() {
    setMenu(!menu);
  }
  return (
    <>
      <section className="w-fit flex select-none flex-row">
        <div className="flex flex-col">
          <Icon
            fileIcon={trash}
            fileName="Trash"
            onDoubleClick={() => openNewWindow("Trash")}
          />
          <Icon
            fileIcon={folder}
            fileName="Projects"
            onDoubleClick={() => openNewWindow("Projects")}
          />
          <Icon
            fileIcon={folder}
            fileName="About"
            onDoubleClick={() => openNewWindow("About")}
          />
          <Icon
            fileIcon={chrome}
            fileName="Chrome"
            onDoubleClick={() => openNewWindow("Chrome")}
          />
          <Icon
            fileIcon={spotify}
            fileName="Spotify"
            onDoubleClick={() => openNewWindow("Spotify")}
          />
        </div>
        <div className="flex flex-col">
          <Icon
            fileIcon={folder}
            fileName="Games"
            onDoubleClick={() => openNewWindow("Games")}
          />
          <Icon
            fileIcon={steam}
            fileName="Steam"
            onDoubleClick={() => openNewWindow("Steam")}
          />
          <Icon
            fileIcon={pokedex}
            fileName="PokeDex"
            onDoubleClick={() => openNewWindow("PokeDex")}
          />

          {windows.map((w) => (
            <Window
              key={w.id}
              id={w.id}
              initialTop={w.top}
              initialLeft={w.left}
              title={w.title}
              onClose={() => closeWindow(w.id)}
            />
          ))}
        </div>
      </section>

      <nav
        className="w-full h-fit absolute bottom-0 select-none"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        {menu ? (
          <button
            onClick={handleLogout}
            className="absolute rounded-2xl p-2 flex flex-row items-center text-xs bottom-12 bg-white cursor-pointer text-black"
          >
            <img src={lock} alt="Lock image" className="w-6" />
            LogOut
          </button>
        ) : (
          ""
        )}
        <ul className="flex flex-row items-center justify-between py-2 list-none">
          <li>
            <button
              onClick={handleClick}
              className="w-12 bg-transparent flex items-center justify-center h-8 border-none cursor-pointer"
            >
              <img
                src={home}
                alt="Home"
                className="w-[2.7rem] my-2 mx-[0.7rem]"
              />
            </button>
          </li>
          <li>
            <DigitalClock />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Desktop;
