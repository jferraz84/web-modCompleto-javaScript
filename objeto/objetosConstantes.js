// pessoa -> 123 ->{...}
const pessoa = {nome: 'Jorge'}
console.log(pessoa)
pessoa.nome = 'Aline'
console.log(pessoa)

// pessoa -> 456 -> {....} aqui, 
// vc esta tentando fazer a vairavel pessao apontar para um novo endereço,
// o que não dá certo
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa)
console.log(pessoa)
pessoa.nome = 'Helo'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Jorge'})
pessoaConstante.nome = 'Heloa'
console.log(pessoaConstante)