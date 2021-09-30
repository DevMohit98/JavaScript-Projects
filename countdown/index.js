const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const headings = document.querySelectorAll(".deadline-format h4");
let GiveAwayDate = new Date(2021, 11, 22, 18, 30, 0);
const year = GiveAwayDate.getFullYear();
const hour = GiveAwayDate.getHours();
const min = GiveAwayDate.getMinutes();
let month = GiveAwayDate.getMonth();
month = months[month];
const date = GiveAwayDate.getDate();
let days = GiveAwayDate.getDay();
days = weekdays[days];
giveaway.textContent = `giveaway end on ${days}, ${date}  ${month} ${year} ${hour}:${min}pm`;
// time in mili sec
const time = GiveAwayDate.getTime();
const RenamingTime = () => {
  const today = new Date().getTime();
  const t = time - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  let hour = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let sec = Math.floor((t % oneMinute) / 1000);
  // sect value array
  const value = [days, hour, minutes, sec];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  headings.forEach((item, index) => {
    item.innerHTML = format(value[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry giveAway expired</h4>`;
  }
};

let countdown = setInterval(RenamingTime, 1000);
RenamingTime();
