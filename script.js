var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');



function titleCase(str) {
  
  let aux = str.split(' ')
  let size = 0

  while (size < aux.length){
    aux[size] = aux[size].toLowerCase()
    let aux2 = aux[size].split('')
    aux2[0] = aux2[0].toUpperCase()
    
    aux[size] = aux2[0] + aux[size].slice(1)
  
    size++
  }
    let finalStr = aux.join(' ')
    console.log(finalStr)
    return finalStr;
  }
  
  titleCase("sHoRt AnD sToUt");


  