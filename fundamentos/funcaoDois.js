// Armazenando uma função dentro de uma variavel

const imprimirSoma = function(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função ARROW (ARROW FUNCTION) dentro de uma variavel

const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 5));

// Retorno implicito

const subtracao = (a, b ) => a - b;
console.log(subtracao(8, 5))