// novo recurso do ES2015

const pessoa = {
    nome: 'Aline',
    idade: 33 + " anos,",
    endereco: {
        logradouro: 'Rua: Clóvis lordano',
        numero: 140,
        complemento: 'Bl 1, Ap 1',
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)
const {nome: a, idade: i} = pessoa
console.log(a, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)
console.log(nome, idade)

const { nome: n, idade: id, endereco: { logradouro, numero} } = pessoa
console.log(n, id, logradouro, numero)



