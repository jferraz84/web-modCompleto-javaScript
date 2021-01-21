function jurosSimples(capIncial, txjuros, tempoAplic) {
    return capIncial + (capIncial * txjuros * tempoAplic)
}

function jurosCompostos(capIncial, txjuros, tempoAplic){
    return capIncial * (1 + txjuros) ** tempoAplic
}

console.log("-------------------------------------------------------")
console.log('O rendimento no juros Simples é: ' + jurosSimples(100, 10/100, 2));
console.log('O rendimento no juros Compostos é: ' + jurosCompostos(100, 10/100, 2)); // Saida com valor sem formatação
console.log('O rendimento no juros Compostos é: ' + jurosCompostos(100, 10/100, 2).toFixed(2).toString().replace(".", ","));
console.log("-------------------------------------------------------")

