const express = require("express")
const app = express()

// Example of a middleware-
// This is middleware function to call it you have to define it as the second parameter in the route handler
function middleware(req, res, next){
    const username = req.headers.username
    if(username != "ankit"){
        res.send("Incorrect username")
    } else {
        next()
    }
}


// app.use() is used for middlewares which are supposed to apply everywhere so you don't have to call it in the route handler, example-
app.use(express.json())
app.use(function defaultMiddleware(req, res, next){
    // after performing checks
    next();
})

app.get("/", middleware, function(req, res){
    res.send("The server is working")
})

app.get("/login", middleware, function(req, res){
    res.send("congrats! you are logged in")
})


// Error handeling middlewares-
// these are used for global error catches, it catches all the error that may happen in the routes decalred above this middleware
app.use(function(err, req, res, next){
    res.json({
        msg : "sorry some error occured"
    })
})

app.listen(3000);

