const open = document.querySelector(".modal-btn");
const model = document.querySelector(".modal-overlay");
const close = document.querySelector(".close-btn");
const OpenModal = () => {
  model.classList.add("open-modal");
};
close.addEventListener("click", () => {
  model.classList.remove("open-modal");
});
open.addEventListener("click", OpenModal);
