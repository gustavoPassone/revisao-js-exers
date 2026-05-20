// 1. Herança Animal

class Animal {
  emitirSom() {
    return "Som genérico";
  }
}

class Cachorro extends Animal {
  emitirSom() {
    return "Latido";
  }
}

// 2 e 3. Funcionários e Gerente

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;

    this.salario = salario;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario); // Chama o construtor do pai

    this.departamento = departamento;
  }
}

// 4 e 6. Sistema Bancário

class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

class ContaPoupanca extends Conta {
  aplicarJuros() {
    this.saldo *= 1.05;
  }
}

// 7. Geometria (Polimorfismo)

class Forma {
  desenhar() {
    return "Desenhando forma...";
  }
}

class Circulo extends Forma {
  desenhar() {
    return "Desenhando um círculo ◯";
  }
}

// 8. Escola

class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}

class Professor extends Usuario {
  lancarNota() {
    return "Nota lançada no sistema";
  }
}

class Aluno extends Usuario {
  entregarTrabalho() {
    return "Trabalho entregue";
  }
}
