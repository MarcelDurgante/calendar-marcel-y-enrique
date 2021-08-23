// ------ VARIABLES -----

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDate = today.getDay();
let currentDay = today.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let controllers = document.getElementById("controllers");

controllers.textContent = currentDay + " " + months[currentMonth] + " " + currentYear

