const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var to_do_items = [{title: "wash car"}, {title: "walk dog"}]

app.get("/to_do_items", function(req, res){
    res.json({items: to_do_items})
})

app.post("/create_item", function(req, res){
    
    var user_title = req.body.title
    var new_item = {title: user_title}
    to_do_items.push(new_item)
    console.log(new_item, user_title)
    res.json({item: new_item})

})

// put js code here







app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.use(express.static('public'))