let emailTextBox = document.getElementById("emailTextBox")
let passwordTextBox = document.getElementById("passwordTextBox")

let loginEmailTextBox = document.getElementById("loginEmailTextBox")
let loginPasswordTextBox = document.getElementById("loginPasswordTextBox")
let btnLogin = document.getElementById("btnLogin")

let btnRegister = document.getElementById("btnRegister")

let btnAddGrocery = document.getElementById("btnAddGrocery")

let groceryFeature = $("#groceryFeature")

let categoriesList = $("#listSelect")
groceryFeature.hide()

firebase.auth().onAuthStateChanged(function(user) {
    listSelect.innerHTML = ""
    refreshLists()
    console.log(user)
    if (user) {
        groceryFeature.show()
    } else {
        groceryFeature.hide()
    }
})

btnAddGrocery.addEventListener('click', function() {

    // return the currently logged in user
    let currentUser = firebase.auth().currentUser

    // get the user id
    // currentUser.uid
    console.log(currentUser)

})

btnLogin.addEventListener('click', function() {

    let email = loginEmailTextBox.value
    let password = loginPasswordTextBox.value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log("User Signed In Successfully!!")
            groceryFeature.show()
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

})


btnRegister.addEventListener('click', function() {

    let email = emailTextBox.value
    let password = passwordTextBox.value

    // create a new user using email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
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


let groceryList = document.getElementById("groceryList")
let itemCategory = document.getElementById("itemCategory")
let itemForm = document.getElementById("itemForm")
let groceryForm = document.getElementById("groceryForm")
let itemEntry = document.getElementById("items")
let listSelect = document.getElementById("listSelect")
let listForm = document.getElementById("listForm")
let btnSaveCategory = document.getElementById("btnSaveCategory")
    // creates an instance of firebase database
const database = firebase.database()
    // creates a node under the root node and calls it lists
const groceryRef = database.ref("lists")

let lists = [] // holds all information of grocery lists
listForm.addEventListener("submit", function(e) {
        e.preventDefault()

        var listName = e.target.title.value
        var uid = firebase.auth().currentUser.uid
        database.ref(`lists/${listName}`).set({ name: listName, uid: uid })

    })
    //creat new lists
    // var listName = 'kroger'
function refreshLists() {
    groceryRef.on('value', function(snapshot) {

        var uid = firebase.auth().currentUser.uid
        console.log("Value has been changed...")

        // remove all lists so we can populate it again
        // and do not have duplicates
        lists = []
        listSelect.innerHTML = ""
        snapshot.forEach(function(childSnapshot) {
            var theList = childSnapshot.val()
            console.log(theList.uid, uid)
            if (theList.uid == uid) {
                listSelect.innerHTML += `<option name = "${childSnapshot.key}" value = "${childSnapshot.key}" >${childSnapshot.key}</option>`
                console.log(childSnapshot.key) // key which in this case is auto id
                    // console.log(childSnapshot.val()) // data for that key

                // add an order to the lists array
                lists.push(childSnapshot.val())

            }

        })

        //displayLists(lists)

    })

}
refreshLists()

// function displayLists(lists) {

//     if (lists.items == null) {
//         return ''
//     }

//     return Object.keys(lists.items).map(function(key) {
//         return `<p>${lists.items[key].title}</p>`
//     }).join('')
// }


// display all the lists on the screen


// function configureObservers() {


//     categoriesRef.on('value', function(snapshot) {

//         categories = []

//         snapshot.forEach(function(childSnapshot) {


//             // childSnapshot.val() -> {items : [..], title : "Walmart"}
//             categories.push(childSnapshot.val())
//         })

//         displayCategories()


//         categoriesList.html('')

//         //let something = Object.keys(lists.items)

//         let groceryLayout = categories.map(function(lists) {
//             return `<li><label>${lists.title}</label><input type='text'/><button onclick='addGroceryItem(this)'>Add Grocery Item</button></li>

//       ${displayLists(lists)}
//       `
//         })


//         categoriesList.html(groceryLayout.join(''))

//     })
// }

// btnSaveCategory.addEventListener('click', function() {

//     let title = listForm.value
//     saveCategory({ title: title })
// })

// function saveCategory(lists) {
//     categoriesRef.child(lists.title).set(lists)
// }

// configureObservers()


// // Grocery List

// itemForm.addEventListener('submit', function(e) {

//     e.preventDefault()

//     var category = e.target.itemCategory.value
//     var title = e.target.title.value
//     database.ref("lists/" + category).child(title).set({ item: title })

// })


// function createItem(item) {
//     console.log(item)
//     $("#itemContainer").html('<div></div>')
//     for (var thing in item) {
//         $("#itemContainer").append(`<li>
//         <p>${thing}</p>
//         <input type='checkbox' thing='${thing}' class='thing' placeholder='thing' /> 
//         <button thing='${thing}' id='${_id}'>Delete</button></li>`);
//         $(`#${_id}`).click(function(e) {
//             var things = e.target.getAttribute('thing')
//             const deleteItem = `http://dc-coffeerun.herokuapp.com/api/coffeelists/${things}`

//             $.ajax({
//                 method: 'DELETE',
//                 url: deleteEmailOrderUrl
//             }).then(function() {
//                 getlists()
//             })
//         })
//     }

// }