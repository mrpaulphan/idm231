// Arrays
const firstName = "Paul";
const pokemons = [
  "Austin",
  "Paul",
  "Sasha",
  "Anuj",
  "Tony",
  "Alexis",
  "Lianna",
  "Cindy",
];
console.log(`Wow we have ${pokemons.length} Pokemons`);

// console.log(pokemons[0]);
// console.log(pokemons[2]);
// console.log(pokemons[6]);

// Objects
const person = {
  firstName: "Paul",
  lastName: "Phan",
  email: "paul@mrpaulphan.com",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);
console.log(person.fullName());

// Arrays
const myArray = [];

console.log("myArray.length: " + myArray.length);

myArray[0] = "hello";
myArray[1] = "world";

console.log("myArray.length: " + myArray.length);
console.log("myArray[0]: " + myArray[0]);

const myOtherArray = ["red", "white", "blue"];

console.log("myOtherArray.length: " + myOtherArray.length);
console.log("myOtherArray[0]: " + myOtherArray[0]);

const hotel = {
  name: "Hurley's Inn",
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ["twin", "double", "suite"],
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

// Accessing Properties & Methods

const hotel = {
  name: "Hurley's Inn",
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

// dot syntax
const hotelName = hotel.name;
const roomsFree = hotel.checkAvailability();

// bracket syntax
const hotelName = hotel["name"];
