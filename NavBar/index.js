const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const check = () => {
  /* links.classList.contains("show-links")
    ? links.classList.remove("show-links")
    : links.classList.add("show-links"); */
  // in a single line
  links.classList.toggle("show-links");
};
toggle.addEventListener("click", check);
