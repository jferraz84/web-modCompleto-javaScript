// par nome/valor

const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'falaaaa'; // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Jorge',
    idade: 35,
    peso: 88,
    endereco: {
        logradouro: 'Rua: Clóvis lordano',
        numero: 140,
        complemento: 'Bl 1, Ap 1',
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente)