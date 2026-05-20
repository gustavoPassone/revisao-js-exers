// 11. Renomeando Variáveis (Alias)

const curso = { id: 1, title: "JS Pro" };
const { title: tituloCurso } = curso;
console.log("11. Variável renomeada:", tituloCurso); // JS Pro

// 12. Template Strings no Map

const produtos = [
  { nome: "PC", preco: 3000 },
  { nome: "Mouse", preco: 100 },
];

const frasesPreco = produtos.map(
  (p) => `O produto ${p.nome} custa R$ ${p.preco}`,
);

console.log("12. Frases:", frasesPreco);


// 13. Desestruturação nos Parâmetros da Função

const exibirUsuario = ({ nome, email }) =>
  `Usuário: ${nome} | Contato: ${email}`;

console.log(
  "13. Parâmetro desestruturado:",
  exibirUsuario({ nome: "Vini", email: "v@v.com", id: 99 }),
);


// 15. Desestruturação Aninhada

const carro = { motor: { cavalos: 150, tipo: "V8" } };
const {
  motor: { cavalos },
} = carro;

console.log("15. Cavalos extraídos de dentro do objeto:", cavalos); // 150


// 18. Cálculo de Desconto e Spread Operator (...)

// Aqui usamos o Spread para manter as propriedades originais e apenas alterar o preco
const produtosComDesconto = produtos.map((p) => ({
  ...p,
  preco: p.preco * 0.9,
}));

console.log("18. Produtos com 10% off:", produtosComDesconto);


// 19. Extração de API (Limpando dados)

const apiData = [
  { id: 1, nome: "Alice", segredo: "123", log: "abc" },

  { id: 2, nome: "Bob", segredo: "456", log: "def" },
];

const dadosLimpos = apiData.map(({ id, nome }) => ({ id, nome }));
console.log("19. Dados filtrados (Segurança):", dadosLimpos);


// 11. Renomeando Variáveis (Alias)

const { title: tituloCurso } = { id: 1, title: "JavaScript" };
console.log("11. Alias:", tituloCurso);


// 12. Formatação de Preços

const produtos = [
  { nome: "Pão", preco: 5 },
  { nome: "Leite", preco: 10 },
];

const etiquetas = produtos.map(
  (p) => `O produto ${p.nome} custa R$ ${p.preco}`,
);

console.log("12. Etiquetas:", etiquetas);


// 13. Desestruturação em Parâmetros

const msgUser = ({ nome, email }) => `User: ${nome} (${email})`;
console.log("13. Função:", msgUser({ nome: "Vini", email: "v@v.com" }));


// 14. Map para Criar Objetos

const statusNums = [10, 15].map((n) => ({ valor: n, par: n % 2 === 0 }));
console.log("14. Números com Status:", statusNums);


// 15. Aninhamento

const empresa = { motor: { cavalos: 300 } };
const {
  motor: { cavalos: hp },
} = empresa;
console.log("15. Aninhado:", hp);


// 16. Lógica no Map

const statusIdade = [15, 20, 18].map((i) => (i < 18 ? "Menor" : "Maior"));
console.log("16. Idades:", statusIdade);


// 17. Desestruturação de Arrays Aninhados

const [, [n2, n3]] = [1, [2, 3], 4];
console.log("17. Extraídos do meio:", n2, n3);


// 18. Cálculo de Desconto (Spread Operator)

const produtosDesc = produtos.map((p) => ({ ...p, preco: p.preco * 0.9 }));
console.log("18. Com Desconto:", produtosDesc);


// 19. Extração de API

const rawData = [{ id: 1, log: "err", user: "Vini" }];
const cleanData = rawData.map(({ id, user }) => ({ id, user }));
console.log("19. Dados Limpos:", cleanData);


// 20. Percentual (Map com Array Original)

const notas = [10, 20, 30];
const percent = notas.map((v, _, arr) => (v / arr.length).toFixed(1) + "%");
console.log("20. Percentual:", percent);