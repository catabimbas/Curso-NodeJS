const express = require("express")
const app = express()

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs')

app.get("/", (req,res)=>{
    var nome = "Victor lima"
    var lang = "JS"
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do programador"
    })
})
app.get("/:nome/:lang", (req,res)=>{
    var nome = req.params.nome
    var lang = req.params.lang
    res.render("home",{
        nome: nome,
        lang: lang
    })
})
app.get("/usuario", (req,res)=>{
    res.render("principal/perfil")
})

app.listen (8080, ()=>{console.log("App rodando!")})