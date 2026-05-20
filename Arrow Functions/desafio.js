class Produto {
  constructor(nome, preco, emPromocao) {
    this.nome = nome;
    this.preco = preco;
    this.emPromocao = emPromocao;
  }
}

class Loja {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  filtrarPromocoes() {
    // Usamos a Arrow Function (p => p.emPromocao)
    // Ela recebe cada produto 'p' e retorna apenas os que tem a flag true
    return this.produtos.filter((p) => p.emPromocao);
  }
}

// Testa

const minhaLoja = new Loja();

minhaLoja.adicionarProduto(new Produto("Teclado Mecânico", 300, true));
minhaLoja.adicionarProduto(new Produto("Mouse Gamer", 150, false));
minhaLoja.adicionarProduto(new Produto("Monitor 144hz", 1200, true));

const itensPromocionais = minhaLoja.filtrarPromocoes();

console.log("Produtos em Oferta:");
itensPromocionais.forEach((item) =>
  console.log(`- ${item.nome}: R$ ${item.preco}`),
);
