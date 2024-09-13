function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.classList.remove("hidden");
  modalImage.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
}
