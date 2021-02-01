const sequencia = {
    _valor: 15,       // Convenção
    get valor() { return this._valor++},
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor}
        }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1250
console.log(sequencia.valor, sequencia.valor)
