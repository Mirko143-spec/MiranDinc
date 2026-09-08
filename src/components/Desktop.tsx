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
import useWindowManager from "../hooks/useWindowManager";
import { useState } from "react";

interface DesktopProps {
  handleLogout: () => void;
}

function Desktop({ handleLogout }: DesktopProps) {
  const [menu, setMenu] = useState<boolean>(false);
  const { windows, open, close, bringToFront } = useWindowManager();

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
            onDoubleClick={() => open("trash", "Trash")}
          />
          <Icon
            fileIcon={folder}
            fileName="Projects"
            onDoubleClick={() => open("projects", "Projects")}
          />
          <Icon
            fileIcon={folder}
            fileName="About"
            onDoubleClick={() => open("about", "About")}
          />
          <Icon
            fileIcon={chrome}
            fileName="Chrome"
            onDoubleClick={() => open("chrome", "Chrome")}
          />
          <Icon
            fileIcon={spotify}
            fileName="Spotify"
            onDoubleClick={() => open("spotify", "Spotify")}
          />
        </div>
        <div className="flex flex-col">
          <Icon
            fileIcon={folder}
            fileName="Games"
            onDoubleClick={() => open("games", "Games")}
          />
          <Icon
            fileIcon={steam}
            fileName="Steam"
            onDoubleClick={() => open("steam", "Steam")}
          />
          <Icon
            fileIcon={pokedex}
            fileName="PokeDex"
            onDoubleClick={() => open("pokedex", "PokeDex")}
          />

          {windows.map((w) => (
            <Window
              key={w.id}
              appType={w.appType}
              initialTop={w.top}
              initialLeft={w.left}
              title={w.title}
              zIndex={w.zIndex}
              content={w.content}
              onClose={() => close(w.id)}
              onActivate={() => bringToFront(w.id)}
              openWindow={open}
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
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            className="absolute p-2 flex flex-row items-center text-xs bottom-[3.25rem] rounded-r-2xl cursor-pointer text-white"
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
              className="w-12 bg-transparent flex items-center justify-center h-8 border-none cursor-pointer outline-none"
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
