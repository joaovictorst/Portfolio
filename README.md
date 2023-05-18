# Projeto com Estutura para ReactJS apps


## Estrutura de pastas

`assets`: serve para armazenas imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, ETC.

`components`: Componentes reutilizáveis da aplicaçao. Componentes que sao unidades para sua aplicaçao, um button, um dropdown, um modal, etc.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, tem interaçoa com hooks do React(usestate, UseEffect) e normalmente reutilizáveis em qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.


`pages` : As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

`services`: Aqui ficam as configuraçoes de HTTP clientes, normalmente utilizando axios.

`store`: ficam as definiçoes de state managers, context api, zustand, redux.

`types`: Armazena as tipagens de typescript (types e interfaces) que sao comuns em várias áreas do projeto.

`util`: funçoes utilitárias como formatCurrency, formatPhone, convertTimezne, parsePhone. (javascript puro).