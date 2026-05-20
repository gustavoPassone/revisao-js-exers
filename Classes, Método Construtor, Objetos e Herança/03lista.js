// 21. Carrinho de Compras

class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionar(produto) {
    this.produtos.push(produto);
  }

  calcularTotal() {
    return this.produtos.reduce((total, p) => total + p.preco, 0);
  }
}

// 23. Sistema de RPG (Interação entre objetos)

class Personagem {
  constructor(nome, vida, ataque) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacar(inimigo) {
    console.log(`${this.nome} ataca ${inimigo.nome}!`);
    inimigo.vida -= this.ataque;
  }
}

// 26. Transferência Bancária

class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  transferir(valor, contaDestino) {
    if (this.saldo >= valor) {
      this.saldo -= valor;

      contaDestino.saldo += valor;
      console.log(`Transferência de R$${valor} concluída.`);
    }
  }
}

// 28. Sistema de Estacionamento

class Estacionamento {
  constructor(vagasTotais) {
    this.vagasTotais = vagasTotais;
    this.carros = [];
  }

  estacionar(carro) {
    if (this.carros.length < this.vagasTotais) {
      this.carros.push(carro);

      return true;
    }

    return false;
  }
}

// 30. Simulador de Elevador

class Elevador {
  constructor(totalAndares, capacidade) {
    this.andarAtual = 0;
    this.totalAndares = totalAndares;
    this.capacidade = capacidade;
    this.pessoas = 0;
  }

  entrar() {
    if (this.pessoas < this.capacidade) this.pessoas++;
  }

  subir() {
    if (this.andarAtual < this.totalAndares) this.andarAtual++;
  }

  descer() {
    if (this.andarAtual > 0) this.andarAtual--;
  }
}
