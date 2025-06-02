// Estratégias de cálculo de XP
class XPBasico {
  calcular(pontuacao) {
    return pontuacao;
  }
}

class XPDificil {
  calcular(pontuacao) {
    return pontuacao * 2;
  }
}

class XPMissaoDiaria {
  calcular(pontuacao) {
    return pontuacao + 50;
  }
}

// Contexto que usa a estratégia
class GeradorDeXP {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }

  setEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  gerar(pontuacao) {
    return this.estrategia.calcular(pontuacao);
  }
}

// Uso
const gerador = new GeradorDeXP(new XPBasico());

console.log(gerador.gerar(10)); // 10

gerador.setEstrategia(new XPDificil());
console.log(gerador.gerar(10)); // 20

gerador.setEstrategia(new XPMissaoDiaria());
console.log(gerador.gerar(10)); // 60
