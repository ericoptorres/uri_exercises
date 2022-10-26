var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function reverseString(str) {
    let newStr
    let aux = []
    let aux2
    let finalStr

    newStr = str.split('')

    let i = newStr.length
    while (i--){
        aux2 = newStr.pop()
        aux.push(aux2)
    }
    
    finalStr = aux.join('')
    return finalStr;
  }
  
  reverseString("htraE morf sgniteerG");


