const express = require("express")
const app = express()
const body = require("body-parser")
app.use(body.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine","ejs")
// app.get("/",function(req, res){
//     res.send("<h1>sooli ronsa</h1>")
// })
var list=[]
app.get("/",function(req,res){
    res.render("index",{task:list})
})
app.post("/",function(req, res){
    var task=req.body.task
    //res.send(task)
     list.push(task)
        res.redirect("/")
    console.log(req.body)
    // res.sendFile(__dirname+"/about.html")
})
app.listen(process.env.PORT||5000,function(){
    console.log("the server is up and running")
})