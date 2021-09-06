const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const generate = () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexValues[randomColor()];
  }
  document.body.style.backgroundColor = hex;
  color.textContent = hex;
};
const randomColor = () => {
  return Math.floor(Math.random() * hexValues.length);
};
btn.addEventListener("click", generate);
