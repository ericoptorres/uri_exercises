var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();


//12 iterações
//x + y > 12 e (x == y)false

let m = 12

let n = 12

let aux = []
let mat = []
let valor
let soma = 0
let operador = lines.shift().trim()
let z = -1

while (m--){
  n = 12

  aux = []
  while (n--){
    valor = parseFloat(lines.shift())
    aux.push(valor)
  }
  mat.push(aux)
}

m = 12

n = 12


while (m--){
  n = 12
  while(n--){
    valor = mat[m][n]
    if((m > n) && (m + n) > 11){
      soma = soma + valor
      z++
    }
  }
}

if (operador == "S"){
  console.log(soma.toFixed(1))
}
else if (operador == "M"){
  console.log(soma / z )
}


