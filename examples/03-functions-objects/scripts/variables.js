var fruit = "Apple";
console.log(fruit); // prints "Apple"
// User can re-declare
// variable using var
var fruit = "Pear";
console.log(fruit); // prints "Pear"

// let or const
// let --------------------
let snack = "pizza";
console.log(snack); // print pizza

// let snack = "chips";
// console.log(snack); // error

snack = "chips";
console.log(snack); // print chips

// const --------------------
const paulBirthday = "7/12";
console.log(paulBirthday); // print 7/12

// const paulBirthday = "7/22";
// console.log(paulBirthday); // error

// paulBirthday = "12/22";
// console.log(paulBirthday); // error

// concatenate ------
let firstName = "Paul";
let lastName = "Phan";
console.log(firstName + lastName); // print "Paul Phan"
console.log(firstName + " " + lastName); // print "Paul Phan"

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
let fullName = `${firstName} ${lastName}`; // prints "Jervis Thompson"
let greeting = `Hello ${fullName}!`;
console.log(greeting);
