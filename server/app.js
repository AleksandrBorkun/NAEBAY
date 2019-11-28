const express = require('express');
const app = express();

const ITEMS = require("./db/items.json")
const CATEGORIES = require("./db/categories.json")
console.log(ITEMS)

app.get('/categories', function(req, res){
    res.json(CATEGORIES);
})


app.get('/items', function(req, res){
    res.json(ITEMS);
})

app.listen(3001);
console.log("Application Listening on port 3001")