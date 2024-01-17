const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database')
const Pergunta = require("./database/Perguntar")
const Resposta = require("./database/Resposta")

// Database
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgERRO)=>{
        console.log(msgERRO)
    })


// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Estou dizendo para o Express usar o BodyParser como decodificador de dados do formulário
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    Pergunta.findAll({raw:true,order:[
        ['id','DESC']
    ]}).then(perguntas => {
        res.render('index', {
            perguntas:perguntas
        })
        console.log(perguntas)
    })
    
})

app.get("/perguntar", (req,res)=>{
    res.render("perguntar")
})

app.post("/salvarPergunta", (req,res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({ // Equivalente ao INSERT INTO perguntas ... Pergunta.
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/")
    })
})

app.get("/perguntar/:id", (req,res)=>{
    var id = req.params.id
    Pergunta.findOne({
        where: {id:id}
    }).then(pergunta => {
        if (pergunta != undefined){ // Pergunta achada
            res.render("pergunta",{
                pergunta:pergunta
            })
        }else{ // Não encontrada
            res.redirect('/')
        }
    })
})


app.listen (8080, ()=>{console.log("App rodando!")})