let contador = 1

console.log('Imprimindo a tábuada do 7')
while (contador <= 10 ) {
    resultado = contador * 7
    console.log('7 X ' + contador + ' = ' + resultado)
    contador++
}

console.log('----------------------------------')
console.log('Imprimindo a tábuada do 8')
for (let i = 1; i <= 10; i++) {
    resultado = i * 8
    console.log('8 X ' + i + ' = ' + resultado)
    
}

console.log('----------------------------------')
const notas = [9.4, 5.5, 6.8, 7.8, 3.8]
for (let i = 0; i < notas.length; i++) {
    console.log(`Notas = ${notas[i]}`)
    
}