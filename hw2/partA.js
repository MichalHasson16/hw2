// Task 1
const person = {
  name: "Michal",
  age: 25,
  isStudent: true,
};

console.log(person);

//Task 2
console.log(person.name);
console.log(person.age);
console.log(person["isStudent"]);

//Task 3
person.age = 26;
person.hobby = "pilates";

console.log(person);

//Task 4
const movie = {
  title: "Mufasa",
  gener: "Adventure",
};

movie.releseYear = 2024;
movie.isPopular = true;

movie.gener = "Action";

console.log(movie);

//Task 5
const car = {
  make: "Mazda",
  model: "Mazda 2",
  year: 2019,
  color: "white",
};

for (const key in car) {
  console.log(`${key} : ${car[key]}`);
}

// Task 6
const firstPrson = {
  name: "Almog",
  age: 29,
};

const secondPerson = {
  name: "Noam",
  age: 25,
};

function combinePeople(firstPrson, secondPerson) {
  return {
    "first person's name": firstPrson.name,
    "first person's age": firstPrson.age,
    "second person’s name": secondPerson.nama,
    "second person’s age": secondPerson.age,
  };
}

const merge = combinePeople(firstPrson, secondPerson);
console.log(merge);

// Task 7
function countProperties(object) {
  let count = 0;
  for (let key in object) {
    count += 1;
  }
  return count;
}

const resM = countProperties(movie);
const resP = countProperties(person);

console.log(`properties quantity in movie:${resM}`);
console.log(`properties quantity in person:${resP}`);

// Task 8
delete person.isStudent;
console.log("isStudent" in person); // checks if deleted
console.log(person);

//Task 9
function hasProperty(obj, prop) {
  return prop in obj;
}
console.log(hasProperty(car, "model"));
console.log(hasProperty(car, "odmel"));

//Task 10
function updatePerson(person, key, value) {
  person[key] = value;
  return person;
}

updatePerson(person, "age", 27);
updatePerson(person, "City", "tlv");

console.log(person);
