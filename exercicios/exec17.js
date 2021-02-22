function novoSalario(salarioAtual, plano) {

    //const salarioAtualFormatado = parseInt(salarioAtual)

    switch (plano) {
        case 'planoA':
            //const aumento = 10
            //const resul = ((salarioAtual * aumento)/ 100) + salarioAtualFormatado
            //return salarioAtual * 1.1
            console.log(`O salário atual é  R$ ${salarioAtual}, no plano A com 10% de aumento, e o novo salário será de R$ ${parseInt(salarioAtual * 1.1)}`)
            break;
        case 'planoB':
        //     const aumento2 = 17
        //     const result = ((salarioAtual * aumento2)/ 100) + salarioAtualFormatado
            console.log(`O salário atual é  R$ ${salarioAtual}, no plano B com 17% de aumento, e o novo salário será de R$ ${parseInt(salarioAtual * 1.17)}`)
            break;
        case 'planoC':
        //     const aumento3 = 25
        //     const resultado = ((salarioAtual * aumento3)/ 100) + salarioAtualFormatado
        console.log(`O salário atual é  R$ ${salarioAtual}, no plano C com 25% de aumento, e o novo salário será de R$ ${parseInt(salarioAtual * 1.25)}`)
            break;        
    
                default:
              console.log(`Não existe aumento para esse plano:  ${plano}`)
    }
}

novoSalario(1500, 'planoA')
novoSalario(2980, 'planoB')
novoSalario(3115, 'planoC')
novoSalario(3115, 'planoD')