const escola = 'Cod3r';
console.log(escola.charAt(4)); // Pegar um determinado caracter dentro da string
console.log(escola.charCodeAt(3)); //Pegar o Valor de um caracter pelo código na tabela Unicode
console.log(escola.indexOf('3')); // Pegando um indice de um caracter

console.log(escola.substring(1));
console.log(escola.substring(0, 3));//Chamada de substring com indice inicial '0' e o indicie final '3'

//Concatenando string com vaiavel com outra string
console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!');

console.log(escola.replace(3, 'e'));

 //Expressão regular, pegando os digitos dentro da variavel 'escola' e trocando pela letra 'e' no caso o num 3 pelo 'e'
console.log(escola.replace(/\d/, 'e'));
 //Expressão regular, pegando as letras e digitos dentro da variavel 'escola' e trocando pela letra  'e' 
console.log(escola.replace(/\w/g, 'e'));
console.log('Ana,Maria,Pedro'.split(',')); //Quebrando uma string em um array