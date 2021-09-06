const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const generate = () => {
  const randomColor = getRandom();
  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
};
const getRandom = () => {
  return Math.floor(Math.random() * colors.length);
};
btn.addEventListener("click", generate);
