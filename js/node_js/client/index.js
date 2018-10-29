

// post an item
var data = {title: "vacuum"}
postItem("http://localhost:3000/create_item", data)


function postItem(url, itemData){
    // item data should be an object
    // that has key value pairs matching
    // what the server endpoint expects
    $.ajax({
        type: "POST",
        url: url,
        data: itemData,
        success: postedItem
        });

}

function postedItem(data){
    var createdItem = data.item
    console.log("created ", createdItem.title)
} 


// get items
getItems()

function getItems(){
    var url = "http://localhost:3000/to_do_items"
    $.ajax({
        type: "GET",
        url: url,
        success: gotItems
        });

}

function gotItems(data){
    var items = data.items
    console.log("got ", items)
} 



