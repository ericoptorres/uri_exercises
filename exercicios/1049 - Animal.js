var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vertebralidade = lines.shift().trim();
var reino = lines.shift().trim();
var comida = lines.shift().trim();
var bicho

if (vertebralidade == "vertebrado"){
    if (reino == "ave"){
        if (comida == "carnivoro"){
            bicho = "aguia"
        }
        else if (comida == "onivoro"){
            bicho = "pomba"
        }
    }
    else if (reino == "mamifero"){
        if (comida == "onivoro"){
            bicho = "homem"
        }
        else if (comida == "herbivoro"){
            bicho = "vaca"
        }
    }

}

else if (vertebralidade == "invertebrado"){
    
    if (reino == "inseto"){
        if (comida == "hematofago"){
            bicho = "aguia"
        }
        else if (comida == "herbivoro"){
            bicho = "lagarta"
        }
    }
    else if (reino == "anelideo"){
        if (comida == "hematofago"){
            bicho = "sanguessuga"
        }
        else if (comida == "onivoro"){
            bicho = "minhoca"
        }
    }
    
}
console.log(bicho)
