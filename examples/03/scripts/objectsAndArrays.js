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
