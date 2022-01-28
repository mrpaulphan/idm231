const pass = 50; // passing score
const score = 20; // current score

// Select message to write based on score.
if (score >= pass) {
  console.log("Congratulations, you passed!");
  if (score >= 100) {
    console.log("You did not get a perfect score.");
  }
} else {
  console.log("Try again.");
}
