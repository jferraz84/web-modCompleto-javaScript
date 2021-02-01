const pessoa = {
    nome: 'Ana',
    idade: 17,
    peso: 45

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

console.log("--------------------------------------------")

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '04/22/2004'
})

pessoa.dataNascimento = '01/01/2011'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = {b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)