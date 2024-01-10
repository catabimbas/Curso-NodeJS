const express = require("express")
const bosyParser = require("body-parser")
const bodyParser = require("body-parser")
const app = express()

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Estou dizendo para o Express usar o BodyParser como decodificador de dados do formulário
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/perguntar", (req,res)=>{
    res.render("perguntar")
})

app.post("/salvarPergunta", (req,res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    console.log(titulo)
    console.log(descricao)
    res.send("Formulario recebido")
})

app.listen (8080, ()=>{console.log("App rodando!")})