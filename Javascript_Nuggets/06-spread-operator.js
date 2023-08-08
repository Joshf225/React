// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = "udemy";

const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

//reference
// const newFriends = friends;
// newFriends[0] = "nancy";

// console.log(friends);
// console.log(newFriends);

//copy
const newFriends = [...friends];
newFriends[0] = "nancy";

console.log(newFriends);

//ES2018- ES8 Objects

const person = { name: "john", job: "devoloper" };

const newPerson = { ...person, city: "Dublin", name: "peter" };
console.log(newPerson);
