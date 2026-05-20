// 1. Dobro
const dobro = (n) => n * 2;
console.log("Dobro de 5:", dobro(5)); // Saída: 10


// 2. Saudação fixa
const saudacao = () => "Olá, Mundo!";
console.log(saudacao()); // Saída: Olá, Mundo!


// 3. Soma simples
const soma = (a, b) => a + b;
console.log("Soma 10+20:", soma(10, 20)); // Saída: 30


// 4. Verificar Par
const ehPar = (n) => n % 2 === 0;
console.log("8 é par?", ehPar(8)); // Saída: true


// 5. Quadrado (Retorno implícito)
const quadrado = (n) => n ** 2;
console.log("Quadrado de 4:", quadrado(4)); // Saída: 16


// 6. Maioridade (Ternário)
const verificarMaioridade = (idade) =>
  idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log("Idade 16:", verificarMaioridade(16)); // Saída: Menor de idade


// 7. Conversão de Moeda
const dolarParaReal = (valor) => valor * 5.0;
console.log("U$ 50 em Reais: R$", dolarParaReal(50)); // Saída: 250


// 8. Template String
const apresentar = (nome, idade) =>
  `Olá, meu nome é ${nome} e tenho ${idade} anos`;
console.log(apresentar("Lucas", 28)); // Saída: Olá, meu nome é Lucas e tenho 28 anos


// 9. Multiplicação por 10
const mult10 = (n) => n * 10;
console.log("7 x 10:", mult10(7)); // Saída: 70


// 10. Comprimento de String
const tamanhoTexto = (str) => str.length;
console.log("Tamanho de 'JavaScript':", tamanhoTexto("JavaScript")); // Saída: 10