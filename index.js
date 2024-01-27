const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database')

const articlesController = require("./articles/articlesController")
const categoriesController = require("./categories/categoriesController")

// View Engine
app.set("view engine","ejs")

// Static
app.use(express.static('public'))

//BodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Database
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso")
    }).catch((error)=>{
        console.log(error)
    })

app.use("/",categoriesController)
app.use("/",articlesController)


app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(8080, ()=>{
    console.log("Servidor funcionando")
})