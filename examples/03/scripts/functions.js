function updateMessage() {
  const el = document.getElementById("message");
  el.textContent = msg;
  return msg;
}

updateMessage();

// Function with Parameters
function updateMessage(name, message) {
  console.log("Hello " + name + ", " + message);
  // or with ES6
  console.log(`Hello ${name}, ${message}`);
}

updateMessage();

function getArea(width, height) {
  return width * height;
}

getArea(3, 5);

const myFunction = function () {
  // ...
};

const myFunction = () => {
  // ...
};

const name = "Paul";

function logName() {
  console.log(name); // prints error
}

logName();

function getName(name) {
  return name;
}

const myName = getName(name);
console.log(myName);

// --------------------------------------------------------

let color = "red";

function logColor() {
  color = "blue";
  console.log(`Color inside function: ${color}`);
}

console.log(`Color outside function: ${color}`);
logColor();
console.log(`Color outside function: ${color}`);

// --------------------------------------------------------

let number = 1;

function logNumber() {
  let number = 2;
  console.log(`Number inside function: ${number}`);
}

console.log(`Number outside function: ${number}`);
logNumber();
console.log(`Number outside function: ${number}`);
