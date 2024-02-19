//console.log("mensagem de texto!")
//var n1 = 10
//var n2 = 10
//var total = n1+n1*n1

//console.log("Total:" + total)

//if(total<=10){
  //  console.log("o total é menor ou igual a 10")
//}else{
  //  console.log("o total é maior que 10")
//}
//var soma = require('./soma.js')
//var div = require('./div.js')

//console.log("Soma:" +soma(10,10))
//console.log("Divisão:" + div(10,10))

var http = require('http')

http.createServer(function(req,res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor está ativo!")