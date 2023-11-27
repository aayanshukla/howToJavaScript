//create an empty array of objects
let cars = [
    {make: "Toyota", model: "Camry", year: 2018},
    {make: "Ferrari", model: "Spider",year: 2023},
    {make: "Lamborgini", model: "Urus",year: 2021}
]
console.log(cars)
//Remove the first car object from the "cars" array.
cars.splice(0,1)
console.log(cars)
//Add a new car object to "cars"
cars.push({make: "Honda", model: "Civic", year: 2020})
console.log(cars)
//Update the "model" property of the second car object in the array to "Accord"
cars[1].model = "Accord"
console.log(cars)