import express from 'express'
import jwt , { JwtPayload} from 'jsonwebtoken'
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

const JWT_SECRET = "ankit123"

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials : true,
    origin : "http://localhost:5173"
}))

app.post("/signin", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    // Do DB checks and validation and then fetch the user id 
    
    // To asign a jwt token 
    // const token = jwt.sign(payload, secret-key)

    const token = jwt.sign(
        {id : 1}, // this can be user.id fetched from the db or any payload (the data i want to include in the token )
        JWT_SECRET  // secret key to sign the token 
    )
    res.cookie('token', token) // basic structure res.send(name , value, options) name and value are mandatory
    res.send("user logged in successfully")
    
})

app.get('/user', (req, res)=>{
    // Get the token
    const token = req.cookies.token;
    // Decode it using jwt.verify
    const decoded = jwt.verify(token , JWT_SECRET) as JwtPayload
    // it will return the payload ({id : 1}) in this case and other things like assigned time and expiration time if it was given during creation of the token

    const id:string = decoded.id;
    // you can fetch the real user's email
    res.send({
        "your id" : id
    })
})

app.post("/logout", (req , res)=>{
    res.cookie('token', '') // set token to empty string
    res.send("User logged out successful")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})