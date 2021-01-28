// usando a notação literal 
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalrio(){
            return ( salarioBase / 30) * ( 30 - faltas)
        }
    }
}

const func1 = criarFuncionario('Jorge', 7980, 4)
const func2 =  criarFuncionario('Aline', 3115, 3)

console.log(`O salario Base do funcionário ${func1.nome} é de ${func1.salarioBase} mas foi R$ ${func1.getSalrio()} no mês de fevereiro por ${func1.faltas} faltas`)
console.log(`O salário Base do funcionario ${func2.nome} é de ${func2.salarioBase} mas foi R$ ${func2.getSalrio()} no mês de fevereiro por ${func2.faltas} faltas`)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
 const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJSON.info)
