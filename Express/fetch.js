const express = require("express")
const app = express()

app.use(express.json())

app.get("/", async function(req, res){
    const data = await fetch("https://fakerapi.it/api/v1/persons")
    const response = await data.json()
    res.send(response)
})

app.listen(3000)
