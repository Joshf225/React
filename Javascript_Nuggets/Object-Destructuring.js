// faster/easier way to access/unpack values from arrays

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};
let last = "some value";
const {
  last: shakeAndBake,
  first,
  city,
  siblings: { sister: favouriteSibling },
} = bob;

console.log(first, last, city, favouriteSibling, shakeAndBake);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

function printPerson({ first, last, city, siblings: { sister } }) {
  console.log(first, last, sister);
}

printPerson(bob);
