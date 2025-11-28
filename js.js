const pokeModal = document.getElementById("poke-modal");
const pokedexButton = document.querySelector(".pokedex");
const closeButton = document.getElementById("close");
const pokeContent = document.getElementById("poke-card-content");
const pokeNew = document.getElementById("poke-new");
const pokeForm = document.getElementById("poke-form");
const pokeSubmit = document.getElementById("poke-submit");
const sprite = document.getElementById("poke-sprite");

closeButton.addEventListener("click", () => {
  pokeModal.close();
});

pokedexButton.addEventListener("click", () => {
  pokeModal.showModal();

});

pokeSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  pokeContent.style.display = "flex";
  pokeForm.style.display = "none";
  sprite.style.display = "block";
  displayData();
});

async function getData() {
  try {
    const pokeInput = document.getElementById("poke-input").value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayData() {
  const data = await getData();
  const pokeTitle = document.getElementById("mon-title");
  const stats = document.getElementById("poke-stats");

  const pokeSprite = data.sprites.front_default;
  const title = data.name;

  stats.innerHTML = "";

  data.stats.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = `${s.stat.name}: ${s.base_stat}`.toUpperCase();

    stats.appendChild(li);
  });

  pokeTitle.textContent = title;
  sprite.src = pokeSprite;
}

pokeNew.addEventListener("click", () => {
  pokeContent.style.display = "none";
  pokeForm.style.display = "flex";
});

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('clock').innerHTML = h + ":" + m;
}

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

startTime();
setInterval(startTime, 1000);
