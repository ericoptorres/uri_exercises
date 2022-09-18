const { clearScreenDown } = require('readline');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();

let m = 0
let n = 0
let number = 4
let array = []
let matriz = []

while (number){

    while (m < number){
        while (n < number){
            if (m == 3){
                array[n] = 1
                
            }
            else{
                array[n] = 2
                
            }
            n++
        }
        n = 0
        
        matriz.push(array)
        console.log(matriz)
        m++
    }
    console.log(matriz)
    number = 0
}

