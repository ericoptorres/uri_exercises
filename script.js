const { Console } = require('console');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('/');




alterado

var dia = lines.shift()
var mes = lines.shift()
var ano = lines.shift()


console.log(`${mes}/${dia}/${ano}`);
console.log(`${ano}/${mes}/${dia}`);
console.log(`${dia}-${mes}-${ano}`);









