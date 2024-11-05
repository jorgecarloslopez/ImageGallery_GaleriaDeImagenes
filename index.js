const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const caption = document.getElementById("caption");
const closeButton = document.getElementById("close");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
    caption.innerText = img.alt;
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
