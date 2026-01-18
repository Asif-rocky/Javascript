const intervalId = setInterval(() => {
  console.log("This message is displayed every 2 seconds");
}, 2000);

const timeoutId = setTimeout(() => {
  console.log("This message is displayed after 5 seconds");
}, 5000);

// clearInterval(intervalId); // This will clear the interval if needed
// clearTimeout(timeoutId); // This will clear the timeout if needed

//Clearing the Interval in timeout function
setTimeout(() => {
  clearInterval(intervalId);
  console.log("The setInterval is stopped after 6 seconds");
}, 6000);
