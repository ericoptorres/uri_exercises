const { Console } = require('console');
const { clearScreenDown } = require('readline');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();

let array = []
let soma = 0
let tamanho = lines.length
console.log(lines)
console.log(lines.length)

for (let i = 0 ; i < (tamanho - 1) ; i++){
  array[i] = parseInt(lines.shift())
  soma = soma + array[i]
  console.log(soma)
}
console.log(array)
console.log((soma/(tamanho - 1)).toFixed(2))