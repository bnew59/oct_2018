
let categoryNameTextBox = document.getElementById("categoryNameTextBox")
let saveCategoryButton = document.getElementById("saveCategoryButton")
let categoriesList = document.getElementById("categoriesList")

// create an instance of database class
const database = firebase.database()

// crete a categories node which will store all the categories/storenames
const categoriesRef = database.ref("categories")

// create categories array to hold category objects
let categories = []

saveCategoryButton.addEventListener('click',function(){

    let categoryTitle = categoryNameTextBox.value

    // creating an object to hold the title
    let category = { title : categoryTitle, zipCode : "77098" }

    // instead of passing title as a string we are going to pass an object
    // as shown on ~ line 19
  //  saveCategory(categoryTitle)

    saveCategory(category)

})

// configure the value event generated from firebase database
function configureObservers() {

  // value event is fired whenever ANYTHING changes inside the categories node
  categoriesRef.on('value',function(snapshot){

      // clear the categories array
      categories = []

      snapshot.forEach(function(childSnapshot){
          console.log(childSnapshot.key)
          console.log(childSnapshot.val())

          categories.push(childSnapshot.val())
      })

      // display categories on the screen
      displayCategories()

  })

}

function addGroceryItem(btn,category_title) {

  let groceryItemTitle = btn.previousElementSibling.value
  //let categoryTitle = btn.previousElementSibling.previousElementSibling.innerHTML

  let itemsRef = categoriesRef.child(category_title).child("items")
  itemsRef.child(groceryItemTitle).set({
    title : groceryItemTitle,
    quantity : 10
  })

/*
  categoriesRef.child(category_title).child(groceryItemTitle).set({
    title : groceryItemTitle,
    quantity : 10
  }) */

  console.log("add grocery item button clicked")

}

function displayCategories() {

  let liItems = categories.map(function(category){
     return `<li>
     <label>${category.title}<label>
     <input type="text" placeholder = "Enter grocery item" />
     <button onclick="addGroceryItem(this,'${category.title}')">Save Grocery Item</button>
     </li>`
   })

   categoriesList.innerHTML = liItems.join('')

}

function saveCategory(category) {

  categoriesRef.child(category.title).set(category)

  /*
        Root
         |
         |--categories
               |
               |----Walmart
                       |
                       |- title : Walmart
  */

  //database.ref("johndoe").set({ username : 'johndoe', email : 'john@gmail.com'})

  //database.ref(category.title).set(category)

}


configureObservers()
