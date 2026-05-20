// 1. Classe Livro

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");

// 2. Método de Saudação

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

// 3. Calculadora de Retângulo

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

// 4 e 20. Carro e CarroEletrico

class Carro {
  constructor(marca) {
    this.marca = marca;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
  }
}

// 5. Produto com Desconto

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(porcentagem) {
    this.preco -= this.preco * (porcentagem / 100);
  }
}

// 6. Contador

class Contador {
  constructor() {
    this.valor = 0;
  }
  incrementar() {
    this.valor++;
  }
  decrementar() {
    this.valor--;
  }
}

// 7. Conversor de Temperatura

class Temperatura {
  constructor(celsius) {
    this.celsius = celsius;
  }
  paraFahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }
}

// 9. Filme

class Filme {
  constructor(titulo, anoLancamento) {
    this.titulo = titulo;

    this.anoLancamento = anoLancamento;
  }
  ehAntigo() {
    return new Date().getFullYear() - this.anoLancamento > 10;
  }
}

// 10. Lâmpada

class Lampada {
  constructor() {
    this.ligada = false;
  }
  ligar() {
    this.ligada = true;
  }
  desligar() {
    this.ligada = false;
  }
}
