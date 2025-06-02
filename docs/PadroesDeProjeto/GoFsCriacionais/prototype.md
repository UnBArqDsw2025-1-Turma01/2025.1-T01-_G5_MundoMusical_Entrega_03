# Padrão de Projeto Prototype

## 1.  Introdução

No desenvolvimento de software orientado a objetos, é comum lidarmos com a criação de objetos complexos, especialmente quando esses objetos possuem muitas configurações ou dependências. Em algumas situações, instanciar um novo objeto do zero pode ser custoso ou desnecessariamente repetitivo. Para lidar com esses cenários, existem os padrões de projeto criacionais, como o **Prototype**, que propõe uma maneira eficiente de criar novos objetos a partir da cópia de um objeto existente.

## 2. O que é o Padrão Prototype?

O padrão de projeto Prototype consiste na criação de novos objetos por meio da clonagem de um objeto já existente, chamado de **protótipo**. Em vez de utilizar o operador `new` ou outras formas tradicionais de instanciação, o padrão Prototype permite duplicar objetos de maneira direta, mantendo suas características e estados.

Esse padrão é particularmente útil quando o processo de criação de um objeto envolve múltiplas etapas de configuração ou exige recursos computacionais consideráveis.

## 3. Objetivo

O principal objetivo do padrão Prototype é:

- **Evitar recriações desnecessárias**: permitindo reutilizar um objeto configurado como base para novas instâncias.
- **Reduzir o acoplamento com classes concretas**: uma vez que os objetos são clonados em tempo de execução.
- **Facilitar a criação de objetos complexos**: com atributos já definidos.

## 4. Quando Usar

O padrão Prototype é indicado em cenários como:

- Quando a criação de um objeto é mais cara que sua clonagem.
- Quando múltiplas instâncias similares de um objeto são necessárias.
- Quando os tipos de objetos a serem criados são determinados em tempo de execução.
- Quando se deseja evitar a dependência de subclasses criadoras de objetos.

## 5. Estrutura do Padrão

A estrutura do padrão Prototype envolve três elementos principais:

- **Prototype**: Define a interface ou método que permite a clonagem do objeto.
- **ConcretePrototype**: Implementa a interface e define como o objeto será copiado.
- **Client**: Código que utiliza o protótipo para criar novos objetos com base em cópias.

## 6. Vantagens

- **Eficiência**: Clonar um objeto pode ser mais rápido do que instanciá-lo do zero.
- **Flexibilidade**: Permite a criação de novos objetos em tempo de execução.
- **Redução de código repetitivo**: Evita a repetição de código para configurar objetos similares.
- **Desacoplamento**: O cliente não precisa saber a classe exata do objeto a ser instanciado.

## 7. Desvantagens

- **Clonagem profunda pode ser complexa**: Objetos com referências internas ou dependências circulares podem ser difíceis de copiar corretamente.
- **Manutenção adicional**: É necessário garantir que a operação de clonagem funcione corretamente em todas as classes envolvidas.
- **Pode ocultar dependências**: Como a criação ocorre por cópia, o rastreamento de dependências pode ficar menos evidente.


##  8. Uso do padrão Prototype na classe exercicio 

```javascript
// Objeto protótipo
const exercicioBase = {
  titulo: "Identifique o acorde",
  tipo: "Audição",
  dificuldade: "Média",
  conteudo: ["Áudio de acorde", "Alternativas múltiplas"],
  clone() {
    return { ...this }; // Cria uma cópia superficial do objeto
  }
};

// Clonando o exercício para customizar
const novoExercicio = exercicioBase.clone();
novoExercicio.titulo = "Identifique o acorde maior";
novoExercicio.dificuldade = "Fácil";

// Exibindo os objetos
console.log("Original:", exercicioBase);
console.log("Clone:", novoExercicio);

```
## 9. Saída Esperada
```javascript
Original: { titulo: 'Identifique o acorde', tipo: 'Audição', dificuldade: 'Média', conteudo: [...], clone: [Function: clone] }
Clone:    { titulo: 'Identifique o acorde maior', tipo: 'Audição', dificuldade: 'Fácil', conteudo: [...], clone: [Function: clone] }
```
![Protótipo](../../../assets/prototype.jpeg)


## 10. Ferramentas Utilizadas

- **Linguagem de Programação**: JavaScript (React)
- **IDE**: VSCode
- **Controle de Versão**: Git/GitHub

## 11. Conclusão

O padrão de projeto Prototype é uma solução eficiente e reutilizável para a criação de objetos complexos, permitindo que novas instâncias sejam geradas a partir de cópias de objetos já existentes. Ao reduzir o custo de criação e promover flexibilidade, esse padrão contribui para um código mais limpo e performático. No entanto, sua implementação exige atenção especial à clonagem de objetos, principalmente quando há estruturas internas complexas. Quando bem utilizado, o Prototype pode ser um poderoso aliado no desenvolvimento de sistemas escaláveis e bem estruturados.

## 12. Histórico de Versão

| Versão | Data       | Data de Revisão          | Descrição            | Autor(es)                       | Revisor(es)                       | Detalhes da revisão        |
| ------ | ---------- | ------------------------ | -------------------- | ------------------------------- | --------------------------------- | -------------------------- |
| 1.0    | 01/06/2025 | DD/MM/AAAA               | Criação do documento e o do padrão Prototype| [Amanda Abreu](https://github.com/Amandaaaaabreu) | [Arthur Rodrigues](https://github.com/arthurrsousa)||
|    |  |              |  |  | |  |
| 1.1    | 02/06/2025 | DD/MM/AAAA               | Atualizando doc| [Amanda Abreu](https://github.com/Amandaaaaabreu) | [Arthur Rodrigues](https://github.com/arthurrsousa)||
|    |  |              |  |  | |  |
