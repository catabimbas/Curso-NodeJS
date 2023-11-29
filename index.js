const express = require('express') //Importanto Express
const app = express() // Iniciando o express

app.listen(4000,function (erro){
    erro?console.log("Ocorreu um erro"):console.log("Servidor iniciado com sucesso")
})