var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();

let number = parseInt(lines.shift())

let resultado = 1

while (number > 1){
    resultado = resultado * number--
}
console.log(resultado)