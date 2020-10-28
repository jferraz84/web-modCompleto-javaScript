// Conceito de Null - Undefined

let valor; // não será inicializada
console.log(valor);

valor = null;
console.log(valor);

const produto = {};
console.log(produto)
console.log(produto.preco);

produto.preco = 2.50;
console.log(produto);

produto.preco = undefined;
console.log(!!produto.preco)
console.log(produto)

produto.preco = null;
console.log(produto)
