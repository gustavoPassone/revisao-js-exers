// 11. Filtrar Positivos
const numeros = [-5, 10, -2, 15, -1, 3];
const positivos = numeros.filter((n) => n > 0);
console.log("Positivos:", positivos); // Saída: [10, 15, 3]


// 12. Nomes em Maiúsculo
const nomes = ["ana", "beto", "caio"];
const maiusculos = nomes.map((n) => n.toUpperCase());
console.log("Nomes em Alta:", maiusculos); // Saída: ['ANA', 'BETO', 'CAIO']


// 13. Busca de Usuário
const usuarios = [
  { id: 1, nome: "A" },
  { id: 3, nome: "B" },
];
const busca = usuarios.find((u) => u.id === 3);
console.log("Usuário ID 3:", busca); // Saída: {id: 3, nome: "B"}


// 14. Cálculo de Imposto (15%)
const precos = [100, 200, 300];
const comImposto = precos.map((p) => p * 1.15);
console.log("Preços com Imposto:", comImposto); // Saída: [115, 230, 345]


// 17. Soma de Carrinho (Reduce)
const totalCarrinho = precos.reduce((acc, p) => acc + p, 0);
console.log("Total do Carrinho:", totalCarrinho); // Saída: 600


// 20. Objeto Curto (Short syntax)
const criarProduto = (nome, categoria) => ({ nome, categoria });
console.log("Novo Objeto:", criarProduto("Teclado", "TI")); // Saída: {nome: "Teclado", categoria: "TI"}