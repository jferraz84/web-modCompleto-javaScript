function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.5, 3.8))
console.log(soma(15., 25))
console.log(soma(1, 15, " teste"))
console.log(soma(' a', 'b', 'c'))
