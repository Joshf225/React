const person = {
  name: "john",
};

console.log(person.name);
person.age = 25;
console.log(person);

const items = {
  "feature-items": ["item1", "item2"],
};

let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};

app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "john");
updateState("job", "developer");
updateState("loading", false);

updateState("products", []);
updateState("name", "peter");

console.log(state);
