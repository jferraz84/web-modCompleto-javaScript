const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} // Era feito assim antigamente
const obj2 = {a, b, c}           // Pode ser feito assim agora 

console.log(obj1, obj2)

const nomeAtrib = 'nota'
const valorAtrib = 7.87

const obj3 = {}                 // Era feito assim antigamente
obj3[nomeAtrib] = valorAtrib
console.log(obj3)

const obj4 = {[nomeAtrib]: valorAtrib}  // Pode ser feito assim agora 
console.log(obj4)

const obj5 = {
    funcao1: function () {
        // ....
    },
    funcao2(){
        // ...
    }
}

console.log(obj5)
