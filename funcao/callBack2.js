const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log("Sem callback")
console.log(notasBaixas)
console.log("------------------------")

// Com callback
notasBaixas2 = notas.filter(function (nota){
    return nota <= 7
})

console.log("Com callback")
console.log(notasBaixas2)

// Callback com 'arrow Function'
const notasBaixas3 = notas.filter(nota => nota <= 7)

console.log("------------------------")
console.log("Callback com 'arrow Function'")
console.log(notasBaixas3)
