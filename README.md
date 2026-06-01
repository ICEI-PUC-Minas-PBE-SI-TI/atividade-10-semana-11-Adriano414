# Trabalho Prático - Semana 11

Nesta atividade, vamos dar continuidade ao projeto desenvolvido ao longo deste semestre, acrescentando a página de detalhes da aplicação.

Imagine que a página principal (home-page) mostre uma visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado para a página de detalhes. A página de detalhes vai mostrar todas as informações sobre o item do seu projeto, seja esse item uma notícia, filme, receita, lugar turístico ou evento.

## Informações Gerais

- Nome:Adriano de Jesus Alves
- Matrícula:906517
- Descreva brevemente seu projeto: Site de jogos mobile de terror 

## Prints do trabalho

<<  COLOQUE A IMAGEM - HOME-PAGE - AQUI >><img src="/public/img/home.page.png" alt="Print">

<<  COLOQUE A IMAGEM - TELA DE DETALHES - AQUI >><img src="/public/img/detalhes.png" alt="print">

## Dados em JSON
Inclua abaixo a estrutura de dados definida para o seu projeto, apresentando pelo menos dois exemplos de registros em formato JSON.

```json

const data = {
  produtos: [
    {
      id: 1,
      nome: "Ice Scream",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream1.jpg",
      descricao: "Rod Sullivan, um sorveteiro misterioso, sequestra o amigo do jogador. Para salvá-lo, é necessário explorar cenários, resolver enigmas e descobrir os segredos sombrios de Rod.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Ice Scream 2",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream2.jpg",
      descricao: "Após os eventos do primeiro jogo, Rod volta a capturar crianças. O jogador deve continuar a investigação e encontrar uma forma de libertar os amigos desaparecidos.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Ice Scream 3",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream3.jpg",
      descricao: "Rod continua espalhando o terror pela cidade. Novos desafios, locais e quebra-cabeças surgem enquanto o jogador tenta impedir seus planos.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Ice Scream 4: Rod's Factory",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream4.jpg",
      descricao: "Os amigos são levados para a enorme fábrica de sorvetes de Rod. O jogador precisa explorar o local, evitar os perigos e encontrar uma rota de fuga.",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Ice Scream 5: Friends",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream5.jpg",
      descricao: "A aventura continua dentro da fábrica. O jogador controla diferentes personagens para resgatar amigos e escapar das armadilhas criadas por Rod.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Ice Scream 6: Friends Charlie",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream6.jpg",
      descricao: "Charlie assume um papel importante na fuga. Novas áreas da fábrica são exploradas enquanto os segredos de Rod começam a ser revelados.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "Ice Scream 7",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream7.jpg",
      descricao: "Os amigos continuam sua luta para escapar da fábrica e derrotar Rod. A história se aprofunda e novos mistérios aparecem.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Ice Scream 8: Final Chapter",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/icescream8.jpg",
      descricao: "O capítulo final da saga. Os protagonistas enfrentam Rod pela última vez para salvar seus amigos e descobrir toda a verdade por trás da fábrica de sorvetes.",
      emEstoque: true
    },
    {
      id: 9,
      nome: "Granny",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/granny.jpg",
      descricao: "Você acorda preso na casa da Granny e precisa escapar em cinco dias. Para sobreviver, é necessário resolver enigmas, encontrar objetos importantes e evitar fazer barulho para não ser encontrado.",
      emEstoque: true
    },
    {
      id: 10,
      nome: "Granny: Chapter Two",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/granny2.jpg",
      descricao: "Após escapar da Granny, você acaba preso em uma nova casa. Desta vez, além da Granny, o perigoso Grandpa também patrulha o local, tornando a fuga ainda mais difícil.",
      emEstoque: true
    },
    {
      id: 11,
      nome: "Granny 3",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/granny3.jpg",
      descricao: "O jogador está preso em uma mansão assustadora habitada por Granny, Grandpa e Slendrina. Para escapar, é preciso explorar o local, resolver quebra-cabeças e evitar os perigos que surgem pelo caminho.",
      emEstoque: true
    },
    {
      id: 12,
      nome: "Evil Nun",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/evilnun.jpg",
      descricao: "Você está preso em uma escola abandonada controlada pela Evil Nun. Para escapar, deve encontrar pistas, resolver enigmas e evitar ser capturado pela freira maligna.",
      emEstoque: true
    },
    {
      id: 13,
      nome: "Mr. Meat",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/mrmeat.jpg",
      descricao: "Uma estranha epidemia transformou um açougueiro em um monstro perigoso. O jogador deve invadir sua casa, resgatar uma garota sequestrada e escapar antes de ser capturado.",
      emEstoque: true
    },
    {
      id: 14,
      nome: "Mr. Meat 2: Prison Break",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/mrmeat2.jpg",
      descricao: "Após os acontecimentos do primeiro jogo, Rebecca é levada para uma prisão cheia de criaturas perigosas. Ela precisa sobreviver, desvendar mistérios e encontrar uma maneira de escapar.",
      emEstoque: true
    },
    {
      id: 15,
      nome: "Death Park",
      preco: 0.00,
      categoria: "Terror",
      imagem: "img/death.park.jpeg",
      descricao: "Jogo onde o jogador deve escapar de um parque abandonado enquanto é caçado por um palhaço assassino.",
      emEstoque: true
    }
  ]
};



