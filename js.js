const aboutModal = document.getElementById("about-modal");
const aboutButton = document.getElementById("about");
const closeButton = document.getElementById("close");

closeButton.addEventListener("click", () => {
  aboutModal.close();
  aboutButton.style.backgroundImage = "url('/images/folder.png')";
});

aboutButton.addEventListener("click", () => {
  aboutModal.showModal();
  console.log("About button clicked");
  aboutButton.style.backgroundImage = "url('/images/open-folder.png')";
});
