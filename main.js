// ------ VARIABLES -----

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDate = today.getDay();
let currentDay = today.getDate();

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

let controllers = document.getElementById("controllers");
let nextArrow = document.getElementById("posDate");
let prevArrow = document.getElementById("preDate");

// ------ TO SHOW CURRENT MONTH AND YEAR -----

controllers.textContent = months[currentMonth] + " " + currentYear;

// ------ TO CHANGE MONTH MONTH AND YEAR -----
nextArrow.addEventListener("click", () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  // ------ TO SHOW CURRENT MONTH AND YEAR -----

  controllers.textContent = months[currentMonth] + " " + currentYear;
});

prevArrow.addEventListener("click", () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  // ------ TO SHOW CURRENT MONTH AND YEAR -----

  controllers.textContent = months[currentMonth] + " " + currentYear;
});

// ------- BRUCE IS PRINTING DAYS -----

let calendarDays = document.getElementById("calendarDays");
let startDate = new Date(currentYear, currentMonth, 1);
let daysQuantity = new Date(currentYear, currentMonth + 1, 0).getDate();

function renderCalendar() {
  for (let index = 1; index < daysQuantity.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("day");
    newDiv.innerHTML = "Hello";
    calendarDays.appendChild(newDiv);
  }
}

renderCalendar();
