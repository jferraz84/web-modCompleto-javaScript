Number.prototype.entre = function (inicio, fim){
    return this >= inicio && fim <= fim
}

const imprimirNota = function (nota){
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra !')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado !')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação !')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado !')
    } else {
        console.log('Nota Inválida')
    }
    console.log('Fim')
}

imprimirNota(10)
imprimirNota(8.9)
imprimirNota(6.55)
imprimirNota(2.3)
imprimirNota(-1)
imprimirNota(11)
