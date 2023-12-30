const express = require("express")
const app = express()

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req,res)=>{
    var nome = "Victor lima"
    var lang = "JS"
    var exibirMsg = false

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15},
        {nome: "Redbull", preco: 6}
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        msg: exibirMsg,
        produtos:produtos
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