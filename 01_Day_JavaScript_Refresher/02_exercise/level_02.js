// 1st challenge
let grade = 40;

if (grade >= 80 && grade <= 100) {
  console.log("A");
} else if (grade >= 70 && grade <= 89) {
  console.log("B");
} else if (grade >= 60 && grade <= 69) {
  console.log("C");
} else if (grade >= 50 && grade <= 59) {
  console.log("D");
} else if (grade >= 0 && grade <= 49) {
  console.log("F");
}

// 2nd challenge
let input = "July";
if (input === "September" || input === "October" || input === "November") {
  console.log("Autumn");
} else if (
  input === "December" ||
  input === "January" ||
  input === "February"
) {
  console.log("Winter");
} else if (input === "March" || input === "April" || input === "May") {
  console.log("Spring");
} else if (input === "June" || input === "July" || input === "August") {
  console.log("Summer");
}

// 3rd challenge
let day = "Sunday";

if (day.toLowerCase() === "sunday") {
  console.log("Sunday is a weekend.");
} else if (day.toLowerCase() === "saturday") {
  console.log("Saturday is a weekend.");
} else {
  console.log(`${day} is a working day.`);
}
