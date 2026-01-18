const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

const currentDate1 = new Date(2026, 0, 18, 10, 30, 0); // January 18, 2026, 10:30:00
console.log(currentDate1);

console.log("Year:", currentDate.getFullYear()); // Year
console.log("Month:", currentDate.getMonth() + 1); // Month (0-11, so add 1)
console.log("Date:", currentDate.getDate()); // Date
console.log("Day:", currentDate.getDay()); // Day of the week (0-6)
console.log("Hours:", currentDate.getHours()); // Hours
console.log("Minutes:", currentDate.getMinutes()); // Minutes
console.log("Seconds:", currentDate.getSeconds()); // Seconds
console.log("Milliseconds:", currentDate.getMilliseconds()); // Milliseconds

console.log(currentDate.toDateString()); // Date in a readable format
console.log(currentDate.toISOString()); // ISO 8601 formatted string
console.log(currentDate.toLocaleString()); // Localized date and time string
console.log(currentDate.toUTCString()); // UTC date string

currentDate.setFullYear(2025);
currentDate.setMonth(11); // December
currentDate.setDate(25);
currentDate.setHours(15);
currentDate.setMinutes(45);
currentDate.setSeconds(30);
console.log("Updated Date and Time:", currentDate);
