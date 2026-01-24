import Icon from "./Icon.tsx";
import folder from "../assets/folder.png";
import trash from "../assets/trash.png";
import chrome from "../assets/chrome.png";
import spotify from "../assets/spotify.png";
import steam from "../assets/steam.png";
import pokedex from "../assets/pokedex.png";
import home from "../assets/home.png";
import DigitalClock from "./DigitalClock.tsx";

function Desktop() {
  return (
    <>
      <section>
        <div className="column">
          <Icon fileIcon={trash} fileName="Trash" />
          <Icon fileIcon={folder} fileName="Projects" />
          <Icon fileIcon={folder} fileName="About" />
          <Icon fileIcon={chrome} fileName="Chrome" />
          <Icon fileIcon={spotify} fileName="Spotify" />
        </div>
        <div className="column">
          <Icon fileIcon={folder} fileName="Games" />
          <Icon fileIcon={steam} fileName="Steam" />
          <Icon fileIcon={pokedex} fileName="PokeDex" />
        </div>
      </section>

      <nav>
        <ul className="nav-list">
          <li>
            <button
              style={{
                width: "3rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={home}
                alt="Home"
                style={{
                  width: "2.7rem",
                  margin: "0.5rem 0.7rem",
                }}
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
