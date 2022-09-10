

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();

let soma = 0
let valor
let i = 0
let resultado = 0

while ((valor = (parseInt(lines.shift()))) >= 0 ){
  soma = soma + valor 
  i++
}
resultado = (soma / i).toFixed(2)
console.log(resultado)


