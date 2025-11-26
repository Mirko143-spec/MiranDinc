const aboutModal = document.getElementById("about-modal");
const aboutButton = document.getElementById("about");
const closeButton = document.getElementById("close");
const modalContent = document.getElementById("modal-content");

closeButton.addEventListener("click", () => {
  aboutModal.close();
  aboutButton.style.backgroundImage = "url('/images/folder.png')";
});

aboutButton.addEventListener("click", async () => {
  try {
    const res = await fetch("/pages/test.html");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.text();
    modalContent.innerHTML = data;
    aboutModal.showModal();
  } catch (error) {}
  aboutButton.style.backgroundImage = "url('/images/open-folder.png')";
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
