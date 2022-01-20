var fruit = "Apple";
console.log(fruit); // prints "Apple"
// User can re-declare
// variable using var
var fruit = "Pear";
console.log(fruit); // prints "Pear"

// let --------------------
let snack = "pizza";
console.log(snack); // print snack

let snack = "chips";
console.log(snack); // error

snack = "chips";
console.log(snack); // print chips
// const --------------------
const paulBirthday = "7/12";
console.log(snack); // print snack

const paulBirthday = "7/22";
console.log(snack); // error

paulBirthday = "12/22";
console.log(snack); // error

// concatenate ------
let firstName = "Paul";
let lastName = "Phan";
console.log(firstName + " " + lastName);

firstName = "Jervis";
lastName = "Thompson";
console.log(firstName + " " + lastName);

const one = 1;
console.log("one: " + one);

// String Interpolation ----------------------------------------
/*
string interpolation, using template literals, allows us to include variables and expressions in our strings,
we can make multi-line strings without the need for an escape character, we can use apostrophes and quotes easily,
they can make our strings and therefore
*/
let fullName = `${firstName} ${lastName}`;
let greeting = `Hello ${fullName}!`;
console.log(greeting);
