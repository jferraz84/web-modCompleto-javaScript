const prod1 = {};
prod1.nome = 'Celular Nokia';
prod1.preco = 'R$ ' + 1500.85;
console.log(prod1);

// Json não é objeto
// json é texto 
// Objeto é atributo, comportamento,  etc

const prod2 = {
    nome: 'Camisa Polo',
    preco: 'R$ '+ 79.95,
    Caracteristica:{
        tecido: 'Algodão',
        tamanho:'P, M, G',
        marca: 'Cavaleiro'
    }                      // Obj dentro de OBJETO
}
console.log(prod2)