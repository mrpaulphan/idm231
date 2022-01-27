// function calculateTipOfBill() {
//   console.log("calculateTipOfBill");
// }

// calculateTipOfBill();

function calculateTipOfBill(total, tipPercentage) {
  // convert the percentage to decimal form
  let percentage = tipPercentage * 0.01; // 20 -> .2
  let tip = total * percentage; // 100 * .2 = 20
  return tip; // 20
}
// calculateTipOfBill(50, 30);
// calculateTipOfBill(40, 10);
let totalTip = calculateTipOfBill(100, 20);
console.log(`You should tip $${totalTip}`);

function emailJervo() {
  // write code to email jervo
}

emailJervo();

function calculateZodiacSign() {
  return "Hello";
}

calculateZodiacSign = () => {
  return "Hello";
};

function findAreaOfRec(base, height) {
  return base * height;
}

findAreaOfRec = (base, height) => {
  return base * height;
};

let area = findAreaOfRec(200, 80);
console.log(area);
alert(area);
// find the div and insert this number on the page
