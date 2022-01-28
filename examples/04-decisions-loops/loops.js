/**
 * Basic for loop
 */

const scores = [94, 72, 17, 80, 90, 27, 57, 100, 101, 75];
const totalScoresCount = scores.length;
const passingGrade = 70;

// Loop through all the scores
for (let i = 0; i < totalScoresCount; i++) {
  let currentLoopValue = scores[i];
  // console.log("loop #" + i + " = " + currentLoopValue);
  if (currentLoopValue >= passingGrade) {
    console.log("You da best!");
  } else {
    console.log("mehhhh");
  }
}
