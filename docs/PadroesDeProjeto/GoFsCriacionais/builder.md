# Padrão de Projeto Builder

## 1.  Introdução

A metodologia por trás do padrão de projeto Builder se concentra em separar a construção de um objeto complexo de sua representação final. Isso permite que o mesmo processo de construção crie diferentes representações do objeto.
O padrão Builder oferece uma metodologia robusta para gerenciar a complexidade da construção de objetos, promovendo a flexibilidade, a organização e a manutenibilidade do código.

## 2. O que é o Padrão Builder?

O padrão Builder permite que você monte objetos complexos por meio de uma série de passos bem definidos. A grande vantagem é que você não precisa executar todos os passos, você seleciona apenas aqueles que são essenciais para a configuração específica do objeto que você deseja criar.

Com ele, se desenvolve várias classes construtoras. Cada uma delas implementa o mesmo conjunto de passos de construção, mas com lógicas distintas. Isso permite que você utilize essas construtoras em seu processo de montagem para gerar uma variedade de objetos com características únicas.

## 3. Objetivo

O principal objetivo do padrão Builder é:

- Controle sobre o Processo de Construção: Permite um controle preciso sobre a ordem e os detalhes da construção do objeto.
- Flexibilidade para Criar Variantes: Facilita a criação de diferentes representações do mesmo objeto, simplesmente usando diferentes Concrete Builders.
- Encapsulamento da Lógica de Construção: A lógica de como as partes são montadas é encapsulada nos Builders, mantendo o código do cliente mais limpo.
- Construção Passo a Passo: Permite a construção de objetos complexos em etapas, o que pode ser útil para objetos que requerem muitas configurações opcionais.
- Código Mais Limpo e Legível: Evita construtores com muitos parâmetros, tornando o código mais fácil de entender e manter.

## 4. Quando Usar

- Seu objeto é complexo e tem muitas partes ou muitas opções de configuração.
- Você precisa que o mesmo processo de construção seja capaz de criar diferentes versões do objeto.
- Você quer ter mais controle sobre o processo de construção, podendo fazê-lo passo a passo.

## 5. Estrutura do Padrão

A estrutura do padrão Builder envolve quatro elementos principais:

- Builder Interface: Define uma interface para criar as partes de um objeto. Essa interface declara os métodos para construir as diferentes "partes" do objeto complexo.
- Concrete Builders: Implementam a interface do Builder. Cada Builder Concreto é responsável por construir uma representação específica do objeto. Eles sabem como implementar os métodos definidos na interface do Builder para produzir a representação desejada.
- Product: É o objeto complexo que está sendo construído. O Builder Concreto é responsável por montar as partes e retornar uma instância do Produto.
- Director: O Diretor é a entidade que orquestra o processo de construção. Ele sabe a sequência de passos para construir um objeto, mas não sabe os detalhes de como cada passo é implementado. Ele interage com o Builder para executar esses passos.

Para a aplicação em TypeScript, o uso de um diretor não é padronizado. A própria entidade escolhida contém seus métodos de construção

## 6. Vantagens

- Evita Construtores Muito Grandes: Evita ter um construtor de objeto com muitos parâmetros diferentes. O Builder permite construir o objeto passo a passo.
- Flexibilidade: Você pode criar muitas variações do mesmo tipo de objeto usando o mesmo processo de construção de forma mais simples.
- Código Mais Limpo: A lógica de como o objeto é montado fica separada do objeto em si e do código que o utiliza.

## 7. Desvantagens

- Aumento da complexidade do código: Para cada tipo diferente de produto ou para cada variação significativa de construção, você precisará criar um ConcreteBuilder separado. Isso aumenta o número de classes no seu projeto.


## 8. Ferramentas Utilizadas

- **Linguagem de Programação**: JavaScript
- **IDE**: VSCode
- **Controle de Versão**: Git/GitHub
  
## 9. Conclusão

Com a flexibilidade do padrão Builder, ele se torna uma ferramenta poderosa para gerenciar a complexidade na criação de objetos, garantindo que você construa exatamente o que precisa, quando precisa.

## 10. Referências
> Refactoring Guru. **Builder** https://refactoring.guru/design-patterns/builder.

## 11. Histórico de Versão

| Versão | Data       | Data de Revisão          | Descrição            | Autor(es)                       | Revisor(es)                       | Detalhes da revisão        |
| ------ | ---------- | ------------------------ | -------------------- | ------------------------------- | --------------------------------- | -------------------------- |
| 1.0    | 01/06/2025 | 01/06/2025               | Criação do documento builder| [Amanda Abreu](https://github.com/Amandaaaaabreu) | [Arthur Rodrigues](https://github.com/arthurrsousa)||
| 1.1    | 02/06/2025 |02/06/2025| Criação do conteudo do artefato  | [Esther Sousa](https://github.com/EstherSousa). | [Laís Soares](https://github.com/Laisczt)| faltava referência ao refactoring guru  |
