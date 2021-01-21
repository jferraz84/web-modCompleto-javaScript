// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'New City',
    valorr: 52000,
    proprietario: {
        nome:'Jorge',
        idade: 36,
        endereco: {
            logradouro: 'Clovis Lordano',
            numero: 140,
            complemento: 'Bl 1, Ap 1',
            bairro: 'Vl Ipê',
            cidade: 'Hortolândi-SP'
        }
    },
    condutores: [{
        nome: 'Aline',
        idade: 33
    }, {
        nome: 'Ana',
        idade: 19
    }],
    calcularValorSeguro: function(){
        // ....
    }
}

carro.proprietario.endereco.numero = 148
delete carro.calcularValorSeguro

console.log(carro)