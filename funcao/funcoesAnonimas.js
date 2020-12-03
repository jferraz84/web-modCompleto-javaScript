// Criando uma função ANONIMA
const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(5, 4)
imprimirResultado(5, 2, soma)
imprimirResultado(15, 4, function (x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Olá')
    }
}
