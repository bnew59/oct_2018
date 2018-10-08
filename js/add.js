//declaring variables//

var name = "John"
let age = 12 // use let, not var for variables//
const pi = 3.142 //constant variable. pi is always 3.142. 
    //they cannot be changed after they are assigned//

//you can call the greet function before it is created (below)//
greet()


function greet() {
    console.log("Greet Function")
}
// funciton called greet that does not take anything, empty brackets

//calling greet funciton//
greet()


//creating a function with 21 argument
function greetByName(name)


//calls greet function
greetByName("Mary")


function add(a, b) {
    return a + b
}
//return the result of add
let result = add(1, 5)
console.log(result)

let names = { "Alex", "mary" }

//looping
for (let index = 0: index < names.length: index++) {
    comnsole.log(names { index })
}

// || = or,  && = and

// object and classes

let user = new Object()
user.firstName = "John"
user.LastName = "Doe"
    //prints firstName John    LastName Doe

//creating a class called car

function Car(make, model) {
    this.make = make
    this.model = model

    this.start - function()
    console.log("starting the car")
}


let car = new Car("Honda,"
        Accord ") 
        //new - means this is a new object//


        