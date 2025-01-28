const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())

const users = [
    {
        email : "ankit@gmail.com",
        password : 1234
    },
    {
        email : "pratik@gmail.com",
        password : 1234
    },
    {
        email : "harsh@gmail.com",
        password : 1234
    }
];

function exists(username , password){
    let userPresent = false
    for (let i = 0; i<users.length; i++){
        if(users[i].email === username ){
            userPresent = true
        }
    }
    return userPresent;
}

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    if(!exists(username, password)){
        return res.send("sorry you need to sign UP first ")
    } else {
        const token = jwt.sign({email : username} , "ankithai")
        res.send(token)
    }
})

app.get("/home", function(req, res){
    const userToken = req.headers.authorization;
    const decode = jwt.verify(userToken, "ankithai");
    const username = decode.email;
    
    res.json({
        "All users" : users.filter(function(val){
           return val.email !== username;
        })
    })

})

app.listen(5000)