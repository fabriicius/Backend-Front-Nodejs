const port = 3003
//Faz interpretação do corpo da requisão
const bodyParser = require('body-parser')
const express = require('express')

//Cria servidor utilizando uma instacia do express
const server = express()

//mostra que o bodyParser ira interpretar o urlencodede
server.use(bodyParser.urlencoded({ extended:true }))
//Se o conteudo for json ele faz a intepretação para json
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Backend is runing on port ${port}`)
})

server.use(function(req, res, next){
    res.send("FUNCIONOU")
})