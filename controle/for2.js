const notas = [6.7, 5.4, 8.9, 2.5, 6.8, 9.5, 10]

for ( let i in notas ){
    console.log('Indice [' + i + ']', 'Nota = ' +notas[i])
}

const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Ferraz',
    idade: 35,
    peso: 87
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}