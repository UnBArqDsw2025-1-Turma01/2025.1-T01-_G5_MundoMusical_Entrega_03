# Metodologias Utilizadas no Projeto

Este documento descreve as principais metodologias adaptadas pela equipe durante o desenvolvimento dos padrões GoF. Cada seção apresenta uma prática utilizada, fundamentada em referências bibliográficas relevantes.

## 1. Divisão em Subgrupos para Criação dos Padrões GoF (adaptado da equipe Spotify)

Para otimizar a produção e promover foco nos diferentes tipos de padrões (criacional, estrutural e comportamental), a equipe foi dividida em três subgrupos. Cada subgrupo ficou responsável por um conjunto específico de padrões, conforme detalhado a seguir:

- **Subgrupo 1:**  
  Padrão Builder (criacional), Proxy (estrutural).  
- **Subgrupo 2:**  
  Padrão Singleton (criacional), Composite (estrutural) e Observer (comportamental).  
- **Subgrupo 3:**  
  Padrão Prototype (criacional), Adapter (estrutural) e Iterator (comportamental).

A adoção dessa estrutura em subgrupos seguiu a recomendação de Gamma et al. (1995), que enfatizam a importância de atribuir responsabilidades claras aos membros para garantir a abrangência e a profundidade na aplicação de cada padrão. Ao alocar grupos menores, tornou-se mais viável aplicar revisões de código, discussões direcionadas e compartilhamento de conhecimento entre os integrantes (Gamma et al., 1995).

> *“Design patterns provide general reusable solutions to common problems in software design. Organizing a equipe para‐distribuir a responsabilidade por grupos de padrões facilita a especialização e acelera o entendimento coletivo”* (Gamma et al., 1995, p. 4).

## 2. Reuniões Semanais de Alinhamento

A equipe realizou encontros semanais para alinhar progresso, discutir impedimentos e ajustar prioridades. Essa prática de cadência fixa para reuniões reflete princípios do Scrum (Schwaber & Sutherland, 2020), mesmo não adotando-o em sua totalidade. Nesses encontros:

- Cada subgrupo apresentou o status dos artefatos produzidos na semana.  
- Foram apontados bloqueios técnicos e logísticos.  
- Definiram-se metas para a próxima semana.

Segundo Schwaber e Sutherland (2020), “as reuniões regulares são fundamentais para manter a transparência, inspecionar o trabalho em andamento e adaptar o planejamento conforme as necessidades emergentes” (p. 28). Embora não tenhamos implementado um quadro completo de Scrum, a reunião semanal serviu como mecanismo de inspeção e adaptação—dois pilares do framework.

## 3. Report Diário no WhatsApp

Para garantir comunicação contínua e rápida resolução de dúvidas, foi criado um canal de WhatsApp exclusivo para o projeto. Nele, cada membro postava diariamente breves relatórios sobre o que estava sendo feito (semelhante a um daily stand-up remoto). Esse modelo de comunicação síncrona e assíncrona se baseia em práticas ágeis de colaboração (Highsmith, 2009), permitindo que:

- Problemas urgentes fossem sinalizados imediatamente.  
- Alinhamentos rápidos ocorressem sem demandar convocações formais.  
- O histórico de conversas ficasse registrado para posterior consulta.

Segundo Highsmith (2009), “a flexibilidade na comunicação, especialmente em contextos onde a equipe pode estar distribuída, fortalece o fluxo de informações e reduz latências na tomada de decisão” (p. 73). O uso de mensageria instantânea para report diário atuou como um substituto adaptado de um Scrum daily stand-up presencial.

## 4. Refatoração Contínua

Desde o início do projeto, adotamos a refatoração contínua como prática fundamental para manter a qualidade do código. Inspirados em Martin Fowler (2018), realizamos pequenos ajustes e melhorias a cada integração, evitando que o código se tornasse legado ou difícil de manter:

- **Refatoração de nomes de variáveis e métodos:** para aumentar clareza.  
- **Redução de acoplamento:** por meio de extração de classes quando necessário.  
- **Otimização de trechos repetidos:** promovendo reutilização de componentes.

Fowler (2018) afirma que “refatorar continuamente preserva o design e reduz a dívida técnica, garantindo que o sistema permaneça coeso e fácil de evoluir” (p. 12). Dessa forma, a equipe conseguia incorporar novos padrões GoF sem comprometer a manutenibilidade do projeto.

## 5. Kanban Adaptado

## Kanban Adaptado no Trello

Para controlar o fluxo de trabalho, usamos o Trello como quadro Kanban digital. Adaptamos os princípios de Anderson (2010) ao nosso ritmo de trabalho, organizando as colunas da seguinte forma:

- **Backlog**:Itens de alto nível que ainda não foram refinados (épicos, ideias gerais).

- **Épicos**: Grandes blocos de funcionalidades (ex.: “Gestão de Usuários”, “Fórum de Discussão”).

- **Funcionalidades**:Componentes derivados dos épicos (ex.: “F1.1: Cadastro de Usuário”, “F2.2: Adicionar resposta ao tópico”).

- **Histórias de Usuário**: Itens granulares com valor para o usuário (ex.: “US.1.1.1: Cadastro de Aluno”, “US.2.2.1: Tela com todas as postagens”).

- **A Fazer**: Tarefas detalhadas prontas para serem puxadas para desenvolvimento imediato.

- **Em andamento**: Cartões que alguém já está desenvolvendo ou testando.

- **Concluído 🎉**: Tarefas finalizadas, aprovadas e prontas para entrega.

---

Dessa forma, o Trello refletia de maneira clara cada etapa — desde o planejamento em **Backlog** até a entrega final em **Concluído** — permitindo que toda a equipe visse rapidamente onde cada tarefa se encontrava.
E pode ser acessado clicando [aqui](https://trello.com/b/qaxQKzI8/backlog)

## 6. Design Sprint Adaptado

Para acelerar a definição de requisitos e a entrega de um produto mínimo viável (MVP), utilizamos elementos do Design Sprint de Knapp, Zeratsky e Kowitz (2016). Adaptamos o formato original de cinco dias para um ciclo de seis semanas, distribuindo as etapas da seguinte forma:

1. **Implementação dos GoFs (Semana 1–2):**  
   - Cada subgrupo foca na criação, configuração e testes iniciais de seus padrões GoF (criacionais, estruturais e comportamentais).  
   - Validar a integração básica dos padrões em pequenos exemplos de código para garantir funcionamento correto.

2. **Implementação do Código (Semana 3–4):**  
   - Expansão dos protótipos iniciais para módulos mais completos, incorporando os padrões GoF em funcionalidades reais do projeto.  
   - Escrita de testes unitários para cada componente, assegurando que os padrões se comportem conforme esperado em cenários práticos.

3. **Testar e Entregar o MVP (Semana 5–6):**  
   - Realizar testes de integração e usabilidade, coletando feedback dos colegas (stakeholders internos) para ajustes finais.  
   - Consolidar todas as implementações em um artefato único (MVP) e documentar o processo de entrega, incluindo instruções de uso e possíveis melhorias futuras.

Knapp, Zeratsky e Kowitz (2016) recomendam “compressão de processos de design em ciclos curtos” para validar hipóteses rapidamente (p. 15). Mesmo estendendo o período, mantivemos o foco em testar e iterar de forma ágil até alcançar um MVP funcional.

---

## Referências Bibliográficas

- Anderson, D. J. (2010). *Kanban: Successful Evolutionary Change for Your Technology Business*. Blue Hole Press.  
- Fowler, M. (2018). *Refactoring: Improving the Design of Existing Code* (2ª ed.). Addison-Wesley.  
- Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley.  
- Highsmith, J. (2009). *Agile Project Management: Creating Innovative Products* (2ª ed.). Addison-Wesley.  
- Knapp, J., Zeratsky, J., & Kowitz, B. (2016). *Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days*. Simon & Schuster.  
- Schwaber, K., & Sutherland, J. (2020). *The Scrum Guide* (versão oficial). Disponível em https://scrumguides.org.

## Histórico de Versão

| Versão | Data       | Data de Revisão | Descrição            | Autor(es)                                           | Revisor(es) | Detalhes da revisão |
| ------ | ---------- | --------------- | -------------------- | --------------------------------------------------- | ----------- | ------------------- |
| `1.0`  | 22/05/2025 | –               | Criação do documento | [Pedro Lucas Dourado](https://github.com/lucasdray) | –           | –                   |