const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".nextBtn");
const pre = document.querySelector(".prevBtn");
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
next.addEventListener("click", () => {
  counter++;
  sliders();
});
pre.addEventListener("click", () => {
  counter--;
  sliders();
});
function sliders() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
