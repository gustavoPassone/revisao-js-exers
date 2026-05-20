// 21. Retorno Implícito de Objeto
// O segredo aqui são os parênteses () envolta das chaves {},
// caso contrário o JS confunde as chaves do objeto com o corpo da função.
const criarUsuario = (id, username) => ({ id, username, status: "Ativo" });
console.log("21. Objeto Gerado:", criarUsuario(101, "vini_dev"));


// 22. Filtro de Objetos (Composição de Métodos)

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Pedro", nota: 5.0 },
  { nome: "Maria", nota: 9.2 },
];

const aprovados = alunos.filter((a) => a.nota >= 7).map((a) => a.nome);
console.log("22. Nomes dos Aprovados:", aprovados);


// 23. Ordenação Decrescente

const precos = [45, 12, 89, 5, 110];
precos.sort((a, b) => b - a);
console.log("23. Preços Ordenados (Maior p/ Menor):", precos);


// 24. Encadeamento (Chaining)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = nums
  .filter((n) => n % 2 === 0) // Pega só os pares [2, 4, 6, 8, 10]
  .map((n) => n * 2) // Dobra eles [4, 8, 12, 16, 20]
  .reduce((acc, n) => acc + n, 0); // Soma tudo

console.log("24. Resultado do Encadeamento:", resultado); // 60


// 25. Gerador de Multiplicador (Closure)

// Uma função que retorna outra função. Útil para "configurar" comportamentos.
const criarMultiplicador = (x) => (y) => x * y;
const triplicar = criarMultiplicador(3);
const quadruplicar = criarMultiplicador(4);
console.log("25. Triplicando 10:", triplicar(10)); // 30
console.log("25. Quadruplicando 10:", quadruplicar(10)); // 40


// 26. Formatação de Dados (Split + Destructuring)

const datasStrings = ["15/05/2024", "20/12/2025", "01/01/2026"];
const datasObjetos = datasStrings.map((data) => {
  const [dia, mes, ano] = data.split("/"); // Desestruturando o array gerado pelo split

  return { dia, mes, ano };
});

console.table(datasObjetos); // console.table exibe de forma linda no navegador!


// 27. Contador de Ocorrências (O poder do Reduce)

const itens = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
const estoqueContado = itens.reduce((contador, fruta) => {
  contador[fruta] = (contador[fruta] || 0) + 1;

  return contador;
}, {});

console.log("27. Frequência de itens:", estoqueContado);


// 28. High-Order Function (Passando função como argumento)

const calcular = (a, b, operacao) => operacao(a, b);
const soma = (x, y) => x + y;
const potencia = (x, y) => Math.pow(x, y);
console.log("28. Usando soma via HOF:", calcular(5, 5, soma));
console.log("28. Usando potência via HOF:", calcular(2, 3, potencia));


// 29. Média de Notas Complexas

const boletim = [
  { nome: "João", notas: [7, 8, 9] },
  { nome: "Bia", notas: [10, 9, 10] },
];

const mediasFinal = boletim.map((aluno) => ({
  nome: aluno.nome,
  media: (
    aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length
  ).toFixed(1),
}));

console.log("29. Médias Finais:", mediasFinal);


// 30. Simulador de Contexto (O problema do 'this')

// Em Arrows, o 'this' é definido pelo escopo onde a função foi criada (Lexical This).
class ContadorTempo {
  constructor() {
    this.segundos = 0;
  }

  iniciar() {
    // Se usássemos 'function()', o 'this' seria o objeto global ou undefined.
    // A Arrow Function "prende" o 'this' à nossa classe ContadorTempo.
    this.timer = setInterval(() => {
      this.segundos++;

      console.log(`30. Tempo decorrido: ${this.segundos}s`);

      if (this.segundos >= 3) clearInterval(this.timer); // Para após 3s para não poluir o console
    }, 1000);
  }
}

const meuRelogio = new ContadorTempo();
meuRelogio.iniciar();
