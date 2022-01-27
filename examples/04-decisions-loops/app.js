const data = ["Eagles", "Flyers", "Sixers", "Phillies"];
const app = document.getElementById("root");

const createButton = (team) => {
  const button = document.createElement("button");

  button.innerHTML = team;
  button.classList.add("btn");
  // button.id = team.toLowerCase();
  button.id = `btn-${team.toLowerCase()}`;

  return button;
};

// for (let i = 0; i < data.length; i++) {
//   const team = data[i];
//   const teamButton = createButton(team);
//   app.appendChild(teamButton);
// }

// data.forEach(team => {
//   const teamButton = createButton(team);
//   app.appendChild(teamButton);
// });

const buildButtons = () => {
  data.forEach((team) => {
    const teamButton = createButton(team);
    app.appendChild(teamButton);
  });
};

window.onload = () => {
  console.log("window loaded!");

  buildButtons();
};

// // Evaluation Conditions & Statements
// if (score > 50) {
//   console.log("You passed!");
// } else {
//   console.log("Try again.");
// }

// // Comparison Operators
// // Operator	Meaning
// // ==	is equal to
// // !=	is not equal to
// // ===	strict equal to
// // !==	strict not equal to

// "Hello" == "Goodbye"; // false

// "Hello" == "Hello"; // true

// "Hello" != "Goodbye"; // true

// "Hello" != "Hello"; // false

// "3" === 3; // false

// "3" === "3"; // true

// "3" !== 3; // true

// "3" !== "3"; // false

// // Other Comparison Operators
// // Operator	Meaning
// // >	greater than
// // <	less than
// // >=	greater than or equal to
// // <=	less than or equal to

// // ((score1 + score2) > (high_score1 + high_score2))

// // Logical Operators

// (2 < 5 && 3 >= 2)(
//   // AND

//   2 < 5 || 2 < 1
// ); // OR

// !(2 < 1); // NOT

// // If Statments
// const level = 'one';
// let title;

// if (level === 'one') {
//   title = 'Level 1';
// } else if (level === 'two') {
//   title = 'Level 2';
// } else if ((level === 'three') || (level === 'four')) {
//   title = 'Level 3 or 4';
// }

// // Check existance
// const myElement = document.getElementById('header');

// if (myElement) {
//   // Element exists, let's do something
// } else {

// }

// // Switch Statements

// switch (level) {
//   case 'one':
//     title = 'Level 1';
//     break;
//   case 'two':
//     title = 'Level 2';
//     break;
//   default:
//     title = 'Level not 1 or 2';
//     break;
// }

// // ^ A switch statement starts with a variable called the switch value. Each case indicates a possible value for this variable and the code that should run if the variable matches that value.
