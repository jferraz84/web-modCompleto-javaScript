// Factory Simples
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('PS5', 4500.45))
console.log(criarProduto('NoteBook', 5500.85))