// 21. HTML Generator
const tags = [
  { t: "Home", u: "/" },
  { t: "Blog", u: "/blog" },
].map(({ t, u }) => `<a href="${u}">${t}</a>`);
console.log("21. HTML:", tags);


// 22. Merge de Dados
const ids = [101, 102];
const nomesUsers = ["Alice", "Bob"];
const baseDados = ids.map((id, i) => ({ id, nome: nomesUsers[i] }));
console.log("22. Base Unificada:", baseDados);


// 23. Chave Dinâmica
const campo = "email";
const { [campo]: valorCampo } = { email: "teste@teste.com", id: 1 };
console.log("23. Chave Dinâmica:", valorCampo);


// 24. Sistema de Notas
const alunos = [
  { n: "A", notas: [8, 9] },
  { n: "B", notas: [5, 6] },
];
const medias = alunos.map(({ n, notas }) => ({
  nome: n,
  media: notas.reduce((a, b) => a + b) / notas.length,
}));
console.log("24. Médias:", medias);


// 25. Refatoração de Objeto (Omitindo campos)
const configOriginal = { porta: 80, token: "SECRET", debug: true };
const { token, ...configPublica } = configOriginal;
console.log("25. Config Sem Token:", configPublica);


// 26. Calculadora de Estoque
const estoque = [{ item: "Mouse", preco: 50, qtd: 10 }];
const valorizado = estoque.map((i) => ({ ...i, total: i.preco * i.qtd }));
console.log("26. Valor Total Estocado:", valorizado);


// 27. Alias no Map
const info = [{ id_user: 1 }, { id_user: 2 }].map(({ id_user: id }) => id);
console.log("27. IDs Renomeados no Map:", info);


// 28. Inversão de Matriz (Primeira Coluna)
const colunas = [
  [1, 2],
  [3, 4],
  [5, 6],
].map(([primeiro]) => primeiro);
console.log("28. Primeira Coluna:", colunas);


// 29. Tratamento de Incompletos
const contatos = [{ nome: "Vini", tel: "123" }, { nome: "Ana" }];
const normalizado = contatos.map(({ tel = "N/A", ...r }) => ({ ...r, tel }));
console.log("29. Dados Normalizados:");
console.table(normalizado);


// 30. Agregador de Classes
class Relatorio {
  gerar(users) {
    return users.map(
      ({ nome, cargo }) => `LOG: ${nome.toUpperCase()} - ${cargo}`,
    );
  }
}
const r = new Relatorio();
console.log(
  "30. Relatório da Classe:",
  r.gerar([{ nome: "vini", cargo: "dev" }]),
);
