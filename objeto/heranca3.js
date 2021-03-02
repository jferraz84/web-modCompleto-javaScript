// Descrição do OBJECT CREATE, como usar e para que serve

const pai = { nome: 'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Helo'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Ana', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Heloa'
console.log(`${filha2.nome} tem o cabelo da cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for( let key in filha1) {
    console.log(key)
}
for( let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
