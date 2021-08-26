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

// ------ VARIABLES FOR ARROWS -----

let controllers = document.getElementById("controllers");
let nextArrow = document.getElementById("posDate");
let prevArrow = document.getElementById("preDate");

// ------ VARIABLES FOR MODAL -----

let newEvent = document.getElementById("newEvent");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");
let cancel = document.getElementById("cancel");
let endDate = document.getElementById("endDate");
let chooseEndDate = document.getElementById("chooseEndDate");
let reminder = document.getElementById("reminder");
let chooseRemind = document.getElementById("chooseRemind");

// ------ TO SHOW CURRENT MONTH AND YEAR -----

function showCurrentDate() {
  controllers.textContent = months[currentMonth] + " " + currentYear;
}
showCurrentDate();

// ------ TO CHANGE MONTH MONTH AND YEAR -----

nextArrow.addEventListener("click", () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }

  // ------ TO SHOW CURRENT MONTH AND YEAR -----
  showCurrentDate();
});

prevArrow.addEventListener("click", () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  // ------ TO SHOW CURRENT MONTH AND YEAR -----

  showCurrentDate();
});

// ----- OPEN & CLOSE EVENTS MODAL ----

newEvent.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});

// ----- CHOOSE ENDATE AND REMINDER ----

endDate.addEventListener("change", () => {
  if (endDate.checked) {
    chooseEndDate.style.display = "block";
  } else {
    chooseEndDate.style.display = "none";
  }
});

reminder.addEventListener("change", () => {
  if (reminder.checked) {
    chooseRemind.style.display = "block";
  } else {
    chooseRemind.style.display = "none";
  }
});

// ------- BRUCE IS PRINTING DAYS -----

let calendarDays = document.getElementById("calendarDays");
let startDate = new Date(currentYear, currentMonth, 1);
let daysQuantity = new Date(currentYear, currentMonth + 1, 0).getDate();
