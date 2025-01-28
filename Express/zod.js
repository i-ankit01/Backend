const express = require('express')
const z = require("zod")
const app = express()

app.use((req, res, next)=>{
    const email = req.headers.email;
    const password = req.headers.password;
    const data = {email , password}
    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(5)
    })
    const response = schema.safeParse(data)
    if(!response.success){
        res.send("wrong input")
    } else {
        next();
    }
})

app.get("/", (req, res)=>{
    res.send("all ok")
})

app.listen(3000)


// various zod methods 