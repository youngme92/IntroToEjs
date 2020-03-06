const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("index2")
})

app.get("/post", function(req, res){
    var posts = [
        {title: "dogs", author: "jindo"},
        {title: "cats", author: "lion"},   
    ]
    res.render("post", {post : posts} )
})


app.get("/:thing", function(req, res){
    var thing = req.params.thing
    res.render("index", {thing : thing})
})

app.listen(port, function(){
    console.log("connected!")
})