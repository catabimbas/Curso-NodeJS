const express = require("express")
const app = express()

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs')

app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/usuario", (req,res)=>{
    res.render("principal/perfil")
})

app.listen (8080, ()=>{console.log("App rodando!")})