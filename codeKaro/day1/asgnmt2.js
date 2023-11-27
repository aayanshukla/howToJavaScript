//Create object person
let person = {
    name: "John",
    age: 30,
    city: "New York",
}
console.log(person)
//remove age property
delete person.age
console.log(person)
//add property job with value engineer
person.job = "Engineer"
console.log(person)
//Update city to San Francisco
person.city = "San Francisco"
console.log(person)