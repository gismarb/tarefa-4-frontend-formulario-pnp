# Formulário de Sugestão de Indicador PNP - React, Formulários e Comunicação entre Componentes

Este projeto foi desenvolvido como atividade avaliativa da disciplina de Front-End, com o objetivo de criar um formulário funcional em React, utilizando TypeScript, Bootstrap, Bootstrap Icons, `useState`, `onSubmit`, comunicação entre componentes por props e callback, além do hook `useEffect`.

A proposta implementada é um formulário experimental para sugestão de indicadores relacionados à Plataforma Nilo Peçanha, simulando uma possível funcionalidade da futura aplicação Web do TCC.

---

## 1. Contexto da Atividade

A atividade solicita o desenvolvimento de um formulário funcional em React que faça sentido dentro do domínio do projeto de TCC do estudante.

O formulário deve aplicar os conceitos trabalhados em aula, incluindo:

- React;
- TypeScript;
- JSX;
- Componentes funcionais;
- Formulário controlado;
- Gerenciamento de estado com `useState`;
- Captura de envio com `onSubmit`;
- Comunicação entre componente filho e componente pai;
- Callback via props;
- Interface TypeScript para definir a estrutura dos dados;
- Interface TypeScript para tipar as props dos componentes;
- Hook `useEffect` para simular ação reativa ou carregamento inicial;
- Função de limpeza no `useEffect`;
- Bootstrap para layout e estilização;
- Bootstrap Icons para enriquecer a interface;
- Organização do código em pastas específicas.

Também deve ser criado um arquivo `App.tsx`, responsável por coordenar os estados principais da aplicação, simular o carregamento inicial e renderizar os componentes desenvolvidos.

---

## 2. Tema Relacionado ao TCC

O tema utilizado neste projeto é o TCC:

**Desenvolvimento de uma Aplicação Web para Ingestão, Tratamento e Disponibilização de Dados da Plataforma Nilo Peçanha**

A proposta do TCC consiste em desenvolver uma aplicação Web capaz de coletar, tratar, consolidar, analisar e disponibilizar dados da Plataforma Nilo Peçanha, permitindo a visualização de indicadores e informações úteis para análise educacional.

Neste projeto de Front-End, foi implementado um protótipo experimental de formulário de sugestão de indicadores. A proposta simula uma funcionalidade que poderia existir na aplicação final do TCC, permitindo que um usuário sugira novos indicadores para análise dentro do sistema.

---

## 3. Descrição da Solução Implementada

A solução implementada consiste em uma tela React chamada **Formulário de Sugestão de Indicador PNP**, composta por:

- Cabeçalho com identificação de protótipo experimental;
- Simulação de carregamento inicial de dados;
- Lista inicial de indicadores relacionados à Plataforma Nilo Peçanha;
- Cards renderizados dinamicamente a partir de um array de dados;
- Resumo quantitativo dos indicadores sugeridos;
- Formulário controlado para sugestão de novo indicador;
- Validação simples dos campos obrigatórios;
- Comunicação do formulário com o componente principal por callback via props;
- Atualização da lista de indicadores após o envio do formulário;
- Atualização do título da aba do navegador com `useEffect`;
- Rodapé acadêmico;
- Dados simulados organizados em arquivo separado;
- Tipagem TypeScript para os dados e props dos componentes.

Os dados utilizados são experimentais e declarados localmente, pois o TCC ainda está em fase inicial e não possui integração real com API, banco de dados ou processo de ingestão da PNP.

---

## 4. Tecnologias Utilizadas nesta Atividade

| Tecnologia | Uso no projeto |
|---|---|
| React | Criação da interface baseada em componentes |
| TypeScript | Tipagem dos dados, estados, props e componentes |
| JSX | Estruturação visual dos elementos da interface |
| Bootstrap | Layout responsivo, cards, badges, botões, formulários, alertas e grid |
| Bootstrap Icons | Ícones visuais no cabeçalho, loading, formulário, resumo e cards |
| CSS | Ajustes visuais personalizados e identidade visual |
| Vite | Criação, execução e build do projeto React com TypeScript |
| Git | Versionamento local do projeto |
| GitHub | Hospedagem do código-fonte do projeto |

> *Observação: as tecnologias acima dizem respeito à atividade de Front-End.*
> *O projeto completo do TCC poderá utilizar outras tecnologias, como back-end, API, banco de dados e processos de engenharia de dados.*

---

## 5. Requisitos da Atividade e Onde Foram Atendidos

| Requisito solicitado | Onde foi implementado |
|---|---|
| Escolher um formulário relacionado ao TCC | Formulário experimental de sugestão de indicadores da PNP |
| Utilizar React com TypeScript | Projeto criado com Vite usando template `react-ts` |
| Utilizar JSX | Arquivos `App.tsx` e componentes da pasta `src/components` |
| Criar formulário funcional | Componente `IndicadorForm.tsx` |
| Controlar campos com `useState` | Estado `formulario` no arquivo `IndicadorForm.tsx` |
| Criar formulário controlado | Campos usando `value` e `onChange` no `IndicadorForm.tsx` |
| Capturar envio com `onSubmit` | Função `handleSubmit` no arquivo `IndicadorForm.tsx` |
| Evitar recarregamento da página | Uso de `event.preventDefault()` no envio do formulário |
| Enviar dados para componente pai | Callback `onAdicionarIndicador` recebido por props |
| Criar callback no componente pai | Função `handleAdicionarIndicador` no arquivo `App.tsx` |
| Tipar os dados com interface TypeScript | Interface `Indicador` em `src/types/Indicador.ts` |
| Tipar as props dos componentes | Interfaces `IndicadorFormProps`, `IndicadorCardProps` e `ResumoIndicadoresProps` |
| Usar `useEffect` | Arquivo `src/App.tsx` |
| Simular carregamento inicial | `useEffect` com `setTimeout` no arquivo `App.tsx` |
| Criar função de limpeza no efeito | `clearTimeout` no retorno do primeiro `useEffect` |
| Atualizar o título da aba | Segundo `useEffect` no arquivo `App.tsx` |
| Usar Bootstrap | Classes `container`, `row`, `col`, `card`, `badge`, `btn`, `form-control`, `form-select`, `alert`, entre outras |
| Usar Bootstrap Icons | Ícones com classes `bi` nos componentes visuais |
| Organizar código em pastas | Pastas `components`, `data` e `types` |
| Carregar dados simulados | Arquivo `src/data/indicadoresIniciais.ts` |
| Exibir dados dinamicamente | Uso de `map()` no arquivo `App.tsx` |
| Usar `key` na renderização da lista | Uso de `key={indicador.id}` no `map()` |
| Manter relação com o TCC | Tema, textos e dados relacionados à Plataforma Nilo Peçanha |

---

## 6. Componentes Criados

### 6.1. `Header.tsx`

Componente responsável pelo cabeçalho principal da aplicação.

Ele exibe:

- badge de protótipo experimental;
- título da aplicação;
- descrição conectando a atividade ao contexto do TCC.

Esse componente mantém o padrão visual das entregas anteriores, utilizando a identidade verde institucional relacionada ao projeto.

---

### 6.2. `Footer.tsx`

Componente responsável pelo rodapé da aplicação.

Ele exibe a identificação da tarefa e mantém o mesmo padrão visual utilizado nas entregas anteriores.

---

### 6.3. `Loading.tsx`

Componente responsável por exibir a tela de carregamento inicial.

Ele simula uma situação em que a aplicação estaria aguardando dados de uma API ou de uma camada externa de dados antes de exibir a interface principal.

Esse componente é exibido enquanto o estado `carregando` está com valor `true`.

---

### 6.4. `ResumoIndicadores.tsx`

Componente responsável por exibir informações resumidas sobre a lista de indicadores.

O componente recebe:

- `indicadores`: lista de indicadores cadastrados ou carregados.

A partir dessa lista, ele calcula:

- total de indicadores sugeridos;
- total de indicadores com prioridade alta.

Esse componente demonstra o uso de props e a criação de informações derivadas a partir dos dados recebidos.

---

### 6.5. `IndicadorCard.tsx`

Componente responsável por exibir os dados de cada indicador em formato de card.

Cada card recebe uma prop chamada `indicador`, tipada com a interface `Indicador`.

O componente exibe:

- nome do indicador;
- categoria;
- prioridade;
- descrição.

A prioridade recebe uma classe visual diferente conforme o valor informado:

- `Baixa`;
- `Média`;
- `Alta`.

Esse componente demonstra o uso de props, componentização e separação entre dados e apresentação visual.

---

### 6.6. `IndicadorForm.tsx`

Componente responsável pelo formulário de sugestão de novo indicador.

O formulário possui os seguintes campos:

- nome do indicador;
- categoria;
- prioridade;
- descrição.

O componente utiliza `useState` para controlar os valores digitados pelo usuário.

No envio do formulário, a função `handleSubmit` captura o evento `onSubmit`, executa uma validação simples e envia os dados para o componente pai por meio da prop `onAdicionarIndicador`.

Essa abordagem demonstra a comunicação entre componente filho e componente pai por callback.

---

## 7. Dados Simulados

Como o TCC ainda está em fase inicial, os dados apresentados na aplicação são simulados.

Eles representam uma possível estrutura futura de indicadores após etapas de:

- ingestão;
- tratamento;
- consolidação;
- análise;
- disponibilização.

Os dados iniciais foram mantidos no arquivo:

```text
src/data/indicadoresIniciais.ts
```

A estrutura dos dados foi definida no arquivo:

```text
src/types/Indicador.ts
```

Essa decisão permite demonstrar os fundamentos de React, TypeScript, JSX, estado, formulário controlado, props, callback e `useEffect` sem depender de uma API ou banco de dados neste momento.

---

## 8. Estrutura do Projeto

```text
tarefa-4-frontend-formulario-pnp/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── IndicadorCard.tsx
│   │   ├── IndicadorForm.tsx
│   │   ├── Loading.tsx
│   │   └── ResumoIndicadores.tsx
│   ├── data/
│   │   └── indicadoresIniciais.ts
│   ├── types/
│   │   └── Indicador.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

> *Observação: Os artefatos, supracitados, indicam apenas a constituição principal.*
> *O projeto é composto de mais arquivos e pastas, não citados acima, por fazerem parte do pacote padrão gerado pelo Vite.*

---

## 9. Como Executar o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/gismarb/tarefa-4-frontend-formulario-pnp.git
```

### 2. Acessar a pasta do projeto

```bash
cd tarefa-4-frontend-formulario-pnp
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar em modo de desenvolvimento

```bash
npm run dev
```

Depois, acesse no navegador o endereço exibido pelo Vite, geralmente:

```text
http://localhost:5173
```

---

## 10. Gerar a Versão de Produção

Para gerar a versão final do projeto:

```bash
npm run build
```

Esse comando valida o TypeScript e gera os arquivos finais na pasta:

```text
dist/
```

Para testar a versão gerada:

```bash
npm run preview
```

---

## 11. Decisões de Desenvolvimento

Algumas decisões tomadas durante o desenvolvimento:

- Foi utilizada como base visual a atividade anterior, mantendo a identidade experimental e a paleta de cores alinhada à landing page do TCC;
- O Bootstrap foi utilizado como principal recurso de layout e responsividade;
- O Bootstrap Icons foi incluído para enriquecer a identificação visual dos componentes;
- O CSS personalizado foi mantido em `src/index.css`, seguindo o padrão aplicado na entrega anterior;
- O formulário foi relacionado ao tema do TCC, utilizando sugestões de indicadores da Plataforma Nilo Peçanha como domínio da interface;
- Os dados foram organizados em arquivo separado, em `src/data/indicadoresIniciais.ts`;
- A interface de dados foi separada em `src/types/Indicador.ts`;
- Os componentes reutilizáveis foram separados na pasta `src/components`;
- O `App.tsx` ficou responsável por controlar os estados principais da aplicação;
- A lista de indicadores foi armazenada em estado com `useState`;
- O estado `carregando` foi utilizado para controlar a simulação de carregamento inicial;
- O primeiro `useEffect` foi utilizado para simular a busca inicial de dados;
- Foi utilizada uma função de limpeza com `clearTimeout` para remover o temporizador do carregamento simulado;
- O segundo `useEffect` foi utilizado para atualizar o título da aba do navegador conforme a quantidade de indicadores;
- O formulário foi implementado como componente separado;
- Os campos do formulário foram controlados por estado com `useState`;
- O envio do formulário foi tratado com `onSubmit`;
- O recarregamento padrão da página foi evitado com `event.preventDefault()`;
- A comunicação entre o formulário e o `App.tsx` foi feita por callback via props;
- A função `handleAdicionarIndicador` foi criada no componente pai para receber os dados do formulário;
- A atualização da lista respeita a ideia de imutabilidade, criando uma nova versão do array;
- A renderização dos cards foi feita com `map()`;
- A propriedade `key` utiliza o campo `id` de cada indicador;
- Foram incluídos comentários explicativos no código para facilitar a leitura e demonstrar as decisões técnicas.

---

## 12. Relação com a Aula

O projeto foi desenvolvido considerando os fundamentos abordados na aula sobre React avançado, formulários, efeitos colaterais e hook `useEffect`.

Os principais conceitos aplicados foram:

- criação de componentes funcionais;
- criação de formulário controlado;
- uso de `useState` para controlar campos do formulário;
- uso de `onChange` para atualizar o estado dos campos;
- uso de `onSubmit` para capturar o envio do formulário;
- validação simples de campos obrigatórios;
- comunicação entre componente filho e componente pai;
- envio de função por props;
- execução de callback para atualizar dados no componente pai;
- simulação de carregamento inicial com `useEffect`;
- uso de array de dependências no `useEffect`;
- função de limpeza para evitar efeitos pendentes;
- atualização do título da aba do navegador com `useEffect`;
- uso de TypeScript para tipar dados e props;
- separação entre modelo de dados e componentes visuais;
- organização do projeto em pastas;
- uso de Bootstrap e Bootstrap Icons em conjunto com React.

---

## 13. Observação sobre o Projeto de TCC

Este projeto não representa a aplicação final do TCC.

Ele é um protótipo acadêmico criado para a atividade de Front-End, com o objetivo de demonstrar como uma futura interface do TCC poderia receber sugestões de indicadores relacionados à Plataforma Nilo Peçanha.

A aplicação final poderá incluir:

- back-end;
- API;
- banco de dados;
- ingestão automatizada;
- tratamento e consolidação de dados;
- autenticação;
- dashboards mais completos;
- filtros avançados;
- validações mais robustas;
- persistência das sugestões enviadas;
- exportação de dados;
- integração com outras fontes de dados educacionais.

---

## 14. Autor

- Nome: Gismar Pereira Barbosa
- Curso: Pós-Graduação Especialização em Desenvolvimento Web e Mobile - IF Sudeste MG
- Semestre: 2026/1
- E-mail: gismar_barbosa@yahoo.com.br
- GitHub: https://github.com/gismarb
- LinkedIn: https://linkedin.com/in/gismar

---

## 15. Licença

Este projeto está licenciado sob os termos da licença MIT.

---

## 16. Página Publicada

O projeto também poderá ser publicado utilizando GitHub Pages.

Após a publicação, o protótipo poderá ser acessado diretamente pelo navegador, sem necessidade de executar o projeto localmente.

Acesse em:

https://gismarb.github.io/tarefa-4-frontend-formulario-pnp/

Essa publicação permite visualizar o protótipo diretamente pelo navegador, sem necessidade de executar o projeto localmente.

---

## 17. Referências Técnicas

- React Docs: https://react.dev
- TypeScript Docs: https://www.typescriptlang.org/docs/
- Vite Docs: https://vite.dev
- Bootstrap Docs: https://getbootstrap.com
- Bootstrap Grid System: https://getbootstrap.com/docs/5.3/layout/grid/
- Bootstrap Cards: https://getbootstrap.com/docs/5.3/components/card/
- Bootstrap Badges: https://getbootstrap.com/docs/5.3/components/badge/
- Bootstrap Buttons: https://getbootstrap.com/docs/5.3/components/buttons/
- Bootstrap Forms: https://getbootstrap.com/docs/5.3/forms/overview/
- Bootstrap Alerts: https://getbootstrap.com/docs/5.3/components/alerts/
- Bootstrap Icons: https://icons.getbootstrap.com/
- Repositório da aula: https://github.com/lucaslattari/tec_front_end---aula-6
- GitHub Pages - Configuring a publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Vite - Static Deploy / GitHub Pages: https://vite.dev/guide/static-deploy
- gh-pages - npm package: https://www.npmjs.com/package/gh-pages
