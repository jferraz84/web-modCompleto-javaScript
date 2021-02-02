// Minha versão
function escolherCarro(modelo) {

    switch ( modelo) {

        case 'hatch':
            console.log(`Compra realizada com sucesso do seu novo ${modelo}`)
            break
        case 'sedan':
            console.log(`Tem certeza que prefere esse modelo ${modelo} ?`)
            break
        case 'motocicleta':
            console.log(`Está certo da compra da sua ${modelo} ?`)
            break
        case 'caminhonete':
            console.log(`Uma ${modelo} é muito bom para quem tem trabalho no campo`)    
            break
        default:
              console.log(`Não trabalhamos com ${modelo} nessa loja !!`)  
    }
}

console.log("-------MINHA VERSÃO-------")
console.log("Primeira escolha: ")
escolherCarro('hatch')
console.log("Segunda escolha: ")
escolherCarro('sedan')
console.log("Terceira escolha: ")
escolherCarro('motocicleta')
console.log("Quarta escolha: ")
escolherCarro('caminhonete')
console.log("Quinta escolha: ")
escolherCarro('Caminhão')


function escolhaCarro (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log("------------------------------------")
console.log("-------VERSÃO DO PROFESSOR-------")
console.log(escolhaCarro('hatch'));
console.log(escolhaCarro('motocicleta'));
console.log(escolhaCarro('sedan'));
console.log(escolhaCarro('caminhonete'));
console.log(escolhaCarro('jetski'));