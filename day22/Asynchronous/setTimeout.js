// - Write a program to demonstrate setTimeout(), clearTimeout(), setInterval()

console.log("The clock will stop in 10 seconds");

const updateClock = () => {
  const now = new Date();
  //   console.log(now);
  console.log(now.toLocaleTimeString());
};

let timerId = setInterval(updateClock, 1000);

setTimeout(() => {
  clearInterval(timerId);
  console.log("The clock has stopped");
}, 11000);

// ----------------------------------------------------------

// EXPLANATION
// first of all, i console logged that clock will stop in 10 seconds
// then i defined a function updateClock, that will get current time and log it
// since using direct data will log full date in weird format, so i did toLocaleTimeString to get only time
// then i used setInterval to call updateClock function every 1 second
// then i used setTimeout to stop the clock after 11 seconds, since the timer will only start after 1 second
