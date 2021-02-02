function calculaValor(valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            console.log(`O resultado da soma entre ${valor1} e ${valor2} é: `+ (valor1 + valor2))
            break
        case '-':
            console.log(`O resultado da subtração entre ${valor1} e ${valor2} é: `+ (valor1 - valor2))   
            break
        case '*':
            console.log(`O resultado da multiplicação entre ${valor1} e ${valor2} é: `+ (valor1 * valor2))   
            break
        case '/':
            console.log(`O resultado da soma entre ${valor1} e ${valor2} é: `+ (valor1 / valor2))          
    }

}

calculaValor(2, '+', 5)
calculaValor(1245, '-', 583)
calculaValor(12, '*', 18)
calculaValor(1500, '/', 15)
