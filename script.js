var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();

let number = parseInt(lines.shift())

let i = 1

while (i <= number){
    console.log(i, i*i, i*i*i)
    i++
}