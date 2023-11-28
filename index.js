let hltb = require('howlongtobeat');
var express = require('express')
let app = express();

let hltbService = new hltb.HowLongToBeatService();

const Port = process.env.PORT || 3003

app.get('/', function(req, res) {
    
        res.json({mensaje : "Hola mundo"});
    
})

app.get('/BuscarJuego', function(req, res) {
    hltbService.search('Nioh').then(result =>{ 
        res.json(result);
    } )
})
  
app.get('/cervezas', function(req, res) {
    res.json({ mensaje: '¡A beber cerveza!' })  
})
  
app.post('/', function(req, res) {
    res.json({ mensaje: 'Método post' })   
})
  
app.del('/', function(req, res) {
    res.json({ mensaje: 'Método delete' })  
})
  
app.listen(Port)
console.log('API en url http://localhost:' + Port)


//;