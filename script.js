const { Console } = require('console');
const { clearScreenDown } = require('readline');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();
//
// get input from the user.
//

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
var diferenca = strokes - par
if (strokes == 1){
    return names[0]
}
else if (diferenca <=-2){
    return names[1]
}
else if (diferenca ==  -1){
    return names[2]
}
else if (strokes == par){
    return names[3]
}
else if (diferenca == 1){
    return names[4]
}
else if (diferenca == 2){
    return names[5]
}
else {
    return names[6]
}
  // Only change code above this line
}

console.log(golfScore(4, 7))




