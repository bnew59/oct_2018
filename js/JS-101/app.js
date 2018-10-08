

// fizz buzz

function fizzBuzz(number) {

  if(number % 3 == 0 && number % 5 == 0) {
    return "Fizz Buzz"
  }
    else if(number % 3 == 0) {
      return "Fizz"
    } else if(number % 5 == 0) {
      return "Buzz"
    }

}

console.log(fizzBuzz(3)) // Fizz
console.log(fizzBuzz(5)) // Buzz
console.log(fizzBuzz(15)) // Fizz Buzz

// declaring variables
var name = "John"
let age = 12  // use let to create variables
const pi = 3.142 // const values cannot be changed once they are assigned

// calling greet before it is declared
greet()

// creating greet function no arguments
function greet() {
  console.log("Greet function")
  console.log("Hi")
  console.log("hello")
}

// calling greet function
greet()

// creating function with 1 argument
function greetByName(name) {
  console.log(name)
}

// calling greetByName function
greetByName("Mary")

// creating add function which returns the result
function add(a,b) {
  let result = a/0
  return result
}

// calling add function
let result = add(1,5)
console.log(result)

// arrays

// empty array
//let names = []

let names = ["Alex","Mary","John","Steve"]

// access item of the array by index
// names[1]
console.log("Printing the array....")
// looping through the array
for(let index = 0; index<names.length;index++) {
  console.log(names[index])
}

// conditions
let version = 3.0
let os = "macOS"

// && = and operator
// || = or operator
if(version == 3.0 && os == "macOS") {
  console.log("3.0 running on macOS")
} else if(version > 3.0 || os == "windows") {
  console.log("> 3.0")
} else {
  console.log("< 3.0")
}

// Object and Classes

let user = new Object()
user.firstName = "John"
user.lastName = "Doe"
user.make = "Honda"
console.log(user)

// creating a class called Car

// this is __init__
function Car(make,model) {
  this.make = make  // this is self
  this.model = model  // this is self

  this.start = function() {
    console.log("starting the car....")
  }

  this.changeGear = function(gear) {
    console.log("Changing gear to " + gear)
  }

}

// python -> car = Car()
// js -> let car = new Car()
// Objc -> Car *car = [[Car alloc] init]] // NeXt

// creating an instance/object of Car
let car = new Car("Honda","Accord")
car.start() // calling the start function
car.changeGear(3)

// Debugging
