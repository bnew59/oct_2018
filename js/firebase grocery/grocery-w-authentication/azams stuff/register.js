
let emailTextBox = document.getElementById("emailTextBox")
let passwordTextBox = document.getElementById("passwordTextBox")

let loginEmailTextBox = document.getElementById("loginEmailTextBox")
let loginPasswordTextBox = document.getElementById("loginPasswordTextBox")
let btnLogin = document.getElementById("btnLogin")

let btnRegister = document.getElementById("btnRegister")

let btnAddGrocery = document.getElementById("btnAddGrocery")

btnAddGrocery.addEventListener('click',function(){

  // return the currently logged in user
  let currentUser = firebase.auth().currentUser

  // get the user id
  // currentUser.uid
  console.log(currentUser)

})

btnLogin.addEventListener('click',function(){

  let email = loginEmailTextBox.value
  let password = loginPasswordTextBox.value

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(user){
    console.log("User Signed In Successfully!!")
  })
  .catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

})


btnRegister.addEventListener('click',function(){

  let email = emailTextBox.value
  let password = passwordTextBox.value

  // create a new user using email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user){
    console.log("User created")
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)
    // ...
});

})
