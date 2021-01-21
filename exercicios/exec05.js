function formatarValorDecimal(valorDecimal){
    valorEmReais = `Meu Salário é R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(1522.55 + 1859.65)