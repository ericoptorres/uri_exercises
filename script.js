var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function steamrollArray(arr) {

    const endless = []

    const flatening = (array => {
        array.map(element => {
            if (Array.isArray(element)){
                return flatening(element)
                
            }
            console.log(`retorno final: ${element}`)
            endless.push(element)
            return element
            

        })
    })

    console.log(flatening(arr))

    console.log(endless)
    return endless;
  }
  
  steamrollArray([1, {}, [3, [[4]]]]);

