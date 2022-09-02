//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())
var c = parseInt(lines.shift())
var maior = 0

if (a>=b){
    if(a>=c){
        maior = a
    }
    else if (a<c){
        maior = c
    }
    }



else if (a<b){
    if (b>=c){
        maior = b
    }
    else if (b<c){
        maior = c
    }
}

console.log(maior + " eh o maior")