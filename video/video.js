const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
btn.addEventListener("click", () => {
  if (btn.classList.contains("slide")) {
    btn.classList.remove("slide");
    video.play();
  } else {
    btn.classList.add("slide");
    video.pause();
  }
});
const pre = document.querySelector(".preloader");
window.addEventListener("load", () => {
  pre.classList.add("hide-preloader");
});
