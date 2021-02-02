function venderFruta(fruta) {

    switch (fruta) {
        case 'maça':
            console.log(`Não vendemos ${fruta} aqui nessa loja`)
            break
        case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}`)
            break
        case 'melancia':
            console.log(`Aqui está, são R$ 3,00 o KG da ${fruta}`)    
            break
        default:
            console.log(`Essa fruta ${fruta}, não faz parte da nossa relação de frutas`)    
    }
}

console.log("Primeiro pedido:" )
venderFruta('maça')
console.log("Segundo pedido:" )
venderFruta('kiwi')
console.log("Terceiro pedido:" )
venderFruta('melancia')
console.log("Quarto pedido:" )
venderFruta('abacate')