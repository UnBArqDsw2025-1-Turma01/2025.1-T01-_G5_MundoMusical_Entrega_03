# Strategy

## Introdução

O padrão comportamental **Strategy** permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Ele permite que o algoritmo varie independentemente dos clientes que o utilizam, promovendo maior flexibilidade e modularidade no sistema.

### Objetivo

Permitir que comportamentos variáveis (como regras de pontuação, geração de feedback, cálculo de XP, etc.) possam ser facilmente trocados sem alterar a lógica principal do sistema, facilitando a extensão e manutenção.


## Metodologia

### Processo de Trabalho

A implementação do padrão Strategy seguiu as seguintes etapas:

1. **Identificação do Problema**: No projeto Mundo Musical, identificou-se a necessidade de aplicar diferentes quantidades de XP para os jogadores após a resolução de exercícios, com base em critérios como missão diária, tipo de exercício, eventos de boost de XP, dificuldade do exercício etc.
2. **Modelagem dos Comportamentos**: Foram mapeados as variações de XP, representando cada um como uma estratégia.
3. **Modelagem UML**: Criação do diagrama para representar a estrutura do Strategy e suas variações de comportamento.
4. **Implementação**: Desenvolvimento das classes de estratégia e do contexto que as utiliza.
5. **Testes**: Validação do funcionamento dos diferentes tipos de feedback aplicados a usuários simulados.

### Ferramentas Utilizadas

- **Linguagem de Programação**: TypeScript (React)
- **IDE**: VSCode
- **Ferramentas de Modelagem**: Lucidchart para diagramas UML
- **Controle de Versão**: Git/GitHub

### Justificativa

O padrão Strategy foi empregado para permitir a aplicação de diferentes lógicas de recompensas em XP para os alunos, sem acoplar regras fixas ao sistema de exercícios. Esta abordagem proporciona:

- Flexibilidade para adaptar comportamentos com base em perfis ou contextos
- Facilidade de adição de novas estratégias sem modificar o sistema base
- Separação clara entre lógica principal e variações de comportamento
- Potencial de reutilização e manutenção facilitada

## Implementação - Estratégias de Recompensa de XP

### Diagrama UML

<div style="width: 640px; height: 480px; margin-left: 100px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/768a5c74-e2c8-461c-98bf-134fcdc5e1de" id="KTplE7VTO.YA"></iframe></div>

### Código
- `src/strategy/XPReward.js`

```javascript
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
```

## Histórico de Versão

| Versão | Data       | Data de Revisão          | Descrição            | Autor(es)                       | Revisor(es)                       | Detalhes da revisão        |
| ------ | ---------- | ------------------------ | -------------------- | ------------------------------- | --------------------------------- | -------------------------- |
| 1.0    | 02/06/2025 | 02/06/2025  | Criação do documento padrão Strategy | [Arthur Rodrigues](https://github.com/arthurrsousa) | [Amanda Abreu](https://github.com/Amandaaaaabreu) | Revisão ortográfica |
| 1.1    | 02/06/2025 | 02/06/2025  | Adição do diagrama UML | [Arthur Rodrigues](https://github.com/arthurrsousa) | [Amanda Abreu](https://github.com/Amandaaaaabreu) |  |