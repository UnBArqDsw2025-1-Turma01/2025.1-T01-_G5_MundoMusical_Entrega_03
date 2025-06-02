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

## Implementação

### Estratégias de Feedback

**Insira prints das estratégias implementadas, por exemplo:**

- `FeedbackMotivacional.ts`
- `FeedbackEstatistico.ts`
- `FeedbackComDica.ts`
- `FeedbackNeutro.ts`


#### Estratégia motivacional

![Print do FeedbackMotivacional](../../../assets/print-feedback-motivacional.png)

#### Estratégia estatística

![Print do FeedbackEstatistico](../../../assets/print-feedback-estatistico.png)

#### Estratégia com dica

![Print do FeedbackComDica](../../../assets/print-feedback-com-dica.png)

#### Estratégia neutra

![Print do FeedbackNeutro](../../../assets/print-feedback-neutro.png)

## Histórico de Versão

| Versão | Data       | Data de Revisão          | Descrição            | Autor(es)                       | Revisor(es)                       | Detalhes da revisão        |
| ------ | ---------- | ------------------------ | -------------------- | ------------------------------- | --------------------------------- | -------------------------- |
| 1.0    | 02/06/2025 | DD/MM/AAAA  | Criação do documento e o do padrão Prototype| [Arthur Rodrigues](https://github.com/arthurrsousa) | [Amanda Abreu](https://github.com/Amandaaaaabreu) | Revisão ortográfica |