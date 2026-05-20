// 1. Dobrar Valores

const nums = [1, 2, 3, 4, 5];
const dobrados = nums.map((n) => n * 2);
console.log("1. Dobrados:", dobrados); // [2, 4, 6, 8, 10]


// 2. Nomes Próprios (Capitalização)

const nomes = ["ana", "joão", "maria"];
const capitalizados = nomes.map((n) => n[0].toUpperCase() + n.slice(1));
console.log("2. Capitalizados:", capitalizados); // ["Ana", "João", "Maria"]


// 3. Desestruturação de Array

const frutas = ["Maçã", "Banana"];
const [f1, f2] = frutas;
console.log("3. Frutas extraídas:", f1, "e", f2); // Maçã e Banana


// 4. Troca de Variáveis (Swap)

let a = 1,
  b = 2;

[a, b] = [b, a];
console.log("4. Inversão: a =", a, "b =", b); // a = 2, b = 1


// 5. Objeto Pessoa

const pessoa = { nome: "Ana", idade: 25 };
const { nome } = pessoa;
console.log("5. Nome extraído:", nome); // Ana


// 6. Map com Índice (Parâmetros)

const itens = ["Caderno", "Lápis", "Borracha"];
const listaFormatada = itens.map((valor, i) => `Índice ${i}: Valor ${valor}`);
console.log("6. Lista com índices:", listaFormatada);


// 9. Desestruturação com Valor Padrão (Default)

const config = {};
const { cor = "preto" } = config;
console.log("9. Cor (padrão):", cor); // preto


// 10. Rest Operator (...)

const valores = [10, 20, 30, 40];
const [primeiro, ...outros] = valores;
console.log("10. Primeiro:", primeiro, "| Resto:", outros); // 10 | [20, 30, 40]
