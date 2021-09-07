const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");
const show = () => {
  sidebar.classList.toggle("show-sidebar");
};
toggle.addEventListener("click", show);
close.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
