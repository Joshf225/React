// faster/easier way to access/unpack variables from arrays

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [peter, bob, anna, kelly, john] = friends;

console.log(peter, bob, anna, kelly, john);

let first = "bob";
let second = "john";
