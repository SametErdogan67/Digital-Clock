setInterval(() => {
  const time = document.querySelector("#time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if (hours > 12) {
    hours = hours - 12;
    day_night = "PM";
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  time.textContent = `${hours}:${minutes}:${seconds}    ${day_night}`;
}, 1000);

const date = document.getElementById("date");
let date1 = new Date();
// console.log(date1);
day = date1.getDate();
console.log(day);
month = date1.getUTCMonth();
console.log(month);
year = date1.getFullYear();

if (day < 10) {
  day = `0${day}`;
}
if (month < 10) {
  month = `0${month}`;
}
let dayOfWeek = function () {
  let gunler = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return gunler[date1.getDay()];
};
console.log(dayOfWeek());

let monthOfYear = function () {
  let aylar = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return aylar[date1.getMonth()];
};
console.log(monthOfYear());

date.textContent = `${day} ${monthOfYear()} ${year} - ${dayOfWeek()}`;
