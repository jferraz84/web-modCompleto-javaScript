
function Pessoa(nome) {

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Jorge')
p1.falar()