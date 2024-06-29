// - Practice conditions and comparison statements (at least 2)

// EXAMPLE OF IF ELSE

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter another number: ");

let a = 1;
let b = 2;

if (a > b) {
  console.log("a is greater than b");
} else if (a === b) {
  console.log("a is equal to b");
} else {
  console.log("a is less than b");
}

// ----------------------------------------------------------

// EXAMPLE OF SWITCH CASE

let day = "Monday";
switch (day) {
  case "Sunday":
    console.log("Today is Sunday");
    break;
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day");
}
