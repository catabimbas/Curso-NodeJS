const express = require('express') //Importanto Express
const app = express() // Iniciando o express

app.get("/", function (req,res){
    res.send("VAI SE FUDER")
})

app.get('/blog/:artigo?',function(req,res){
    var artigo=req.params.artigo
    artigo?res.send(`Segundo o artigo ${artigo}`):res.send("Bem vindo ao meu blog!")
})
app.get('/canal/youtube', function(req, res){
    res.send("<h1>Bem vindo ao meu canal</h1>")
})

app.get('/ola/:nome/:empresa',function(req, res){ //Digite algo depois do "/ola"
    /* REQ => Dados enviados pelo usuário
       RES => Resposta que vai ser enviada para o usuário */
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send(`<h1>Olá ${nome} da empresa ${empresa}</h1>`)
})

app.listen(4000,function (erro){
    erro?console.log("Ocorreu um erro"):console.log("Servidor iniciado com sucesso")
})