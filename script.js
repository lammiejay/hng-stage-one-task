// get day and time from html
const day = document.getElementById('curentDayOfTheWeek');

const timeUTC = document.getElementById('currentUTCTime');

// Get Current date and time
const now = new Date();

// Output day
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = daysOfWeek[now.getDay()];

day.innerHTML = `${today}`;

// Output UTC time
timeUTC.innerText = `${now.getTime()}`;