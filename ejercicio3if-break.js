let factorial = 10;
let i = 1;
let resultado = 1;

while (true) {
    resultado = resultado * i;
    i++
    console.log(resultado);
    if (i === factorial) {
        break
    }
}