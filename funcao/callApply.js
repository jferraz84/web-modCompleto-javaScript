function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * 1 + imposto}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
//console.log(getPreco())
console.log('Preço do Notebook: '+ produto.getPreco())

const carro = { preco: 49990, desc: 0.20}

console.log('Preço do carro (call.v1): ' + getPreco.call(carro))
console.log('Preço do carro (apply.v1): ' + getPreco.apply(carro))
console.log("------------------------------------------")
console.log('Preço do carro (call.v2): ' + getPreco.call(carro, 0.17, '$'))
console.log('Preço do carro (apply.v2): ' + getPreco.apply(global,[ 0.17, '$']))