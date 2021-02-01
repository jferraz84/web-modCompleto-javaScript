function calcularFatorial(numero){
    let fatorial = numero

    for (let i = 1; i < 10; i++) {
        fatorial *= i;
        console.log(`O fatorial de ${numero} na posição ${i} é ${fatorial}`)
    }
}

calcularFatorial(25)