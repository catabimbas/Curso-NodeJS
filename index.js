const express = require('express') //Importanto Express
const app = express() // Iniciando o express

app.get("/", function (req,res){
    res.send("VAI SE FUDER")
})

app.get('/blog',function(req,res){
    res.send("Bem vindo ao meu blog!")
})
app.get('/canal/youtube', function(req, res){
    res.send("<h1>Bem vindo ao meu canal</h1>")
})



app.listen(4000,function (erro){
    erro?console.log("Ocorreu um erro"):console.log("Servidor iniciado com sucesso")
})