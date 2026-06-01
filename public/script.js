const data = {
  produtos: [
    {
      id: 1,
      nome: "Ice Scream",
      preco: 200.00,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg" ,
      descricao: "Rod Sullivan, um sorveteiro misterioso, sequestra o amigo do jogador. Para salvá-lo, é necessário explorar cenários, resolver enigmas e descobrir os segredos sombrios de Rod.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Ice Scream 2",
      preco: 250,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg",
      descricao: "Após os eventos do primeiro jogo, Rod volta a capturar crianças. O jogador deve continuar a investigação e encontrar uma forma de libertar os amigos desaparecidos.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Ice Scream 3",
      preco: 300,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg",
      descricao: "Rod continua espalhando o terror pela cidade. Novos desafios, locais e quebra-cabeças surgem enquanto o jogador tenta impedir seus planos.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Ice Scream 4: Rod's Factory",
      preco: 350,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg",
      descricao: "Os amigos são levados para a enorme fábrica de sorvetes de Rod. O jogador precisa explorar o local, evitar os perigos e encontrar uma rota de fuga.",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Ice Scream 5: Friends",
      preco: 450,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg",
      descricao: "A aventura continua dentro da fábrica. O jogador controla diferentes personagens para resgatar amigos e escapar das armadilhas criadas por Rod.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Ice Scream 6: Friends Charlie",
      preco: 450,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg",
      descricao: "Charlie assume um papel importante na fuga. Novas áreas da fábrica são exploradas enquanto os segredos de Rod começam a ser revelados.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "Ice Scream 7",
      preco: 600,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg",
      descricao: "Os amigos continuam sua luta para escapar da fábrica e derrotar Rod. A história se aprofunda e novos mistérios aparecem.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Ice Scream 8: Final Chapter",
      preco: 799,
      categoria: "Terror",
      imagem: "img/ice.scream.jpeg",
      descricao: "O capítulo final da saga. Os protagonistas enfrentam Rod pela última vez para salvar seus amigos e descobrir toda a verdade por trás da fábrica de sorvetes.",
      emEstoque: true
    },
    {
      id: 9,
      nome: "Granny",
      preco: 250,
      categoria: "Terror",
      imagem: "img/granny1.jpeg",
      descricao: "Você acorda preso na casa da Granny e precisa escapar em cinco dias. Para sobreviver, é necessário resolver enigmas, encontrar objetos importantes e evitar fazer barulho para não ser encontrado.",
      emEstoque: true
    },
    {
      id: 10,
      nome: "Granny: Chapter Two",
      preco: 270,
      categoria: "Terror",
      imagem: "img/granny2.jpeg",
      descricao: "Após escapar da Granny, você acaba preso em uma nova casa. Desta vez, além da Granny, o perigoso Grandpa também patrulha o local, tornando a fuga ainda mais difícil.",
      emEstoque: true
    },
    {
      id: 11,
      nome: "Granny 3",
      preco: 150,
      categoria: "Terror",
      imagem: "img/granny3.jpeg",
      descricao: "O jogador está preso em uma mansão assustadora habitada por Granny, Grandpa e Slendrina. Para escapar, é preciso explorar o local, resolver quebra-cabeças e evitar os perigos que surgem pelo caminho.",
      emEstoque: true
    },
    {
      id: 12,
      nome: "Evil Nun",
      preco: 300,
      categoria: "Terror",
      imagem: "img/evilnun.jpeg",
      descricao: "Você está preso em uma escola abandonada controlada pela Evil Nun. Para escapar, deve encontrar pistas, resolver enigmas e evitar ser capturado pela freira maligna.",
      emEstoque: true
    },
    {
      id: 13,
      nome: "Mr. Meat",
      preco: 400,
      categoria: "Terror",
      imagem: "img/mr.meat.jpeg",
      descricao: "Uma estranha epidemia transformou um açougueiro em um monstro perigoso. O jogador deve invadir sua casa, resgatar uma garota sequestrada e escapar antes de ser capturado.",
      emEstoque: true
    },
    {
      id: 14,
      nome: "Mr. Meat 2: Prison Break",
      preco: 350,
      categoria: "Terror",
      imagem: "img/mrmeat2.jpeg",
      descricao: "Após os acontecimentos do primeiro jogo, Rebecca é levada para uma prisão cheia de criaturas perigosas. Ela precisa sobreviver, desvendar mistérios e encontrar uma maneira de escapar.",
      emEstoque: true
    },
    {
      id: 15,
      nome: "Death Park",
      preco: 150,
      categoria: "Terror",
      imagem: "img/death.park.jpeg",
      descricao: "Jogo onde o jogador deve escapar de um imenso parque de diversoes abandonado enquanto é caçado por um palhaço assassino.",
      emEstoque: true
    }
  ]
};


// Página inicial
const listaProdutos = document.getElementById("lista-produtos");

if (listaProdutos) {
  data.produtos.forEach(produto => {
    listaProdutos.innerHTML += `
      <div class="card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <a href="detalhes.html?id=${produto.id}">
          Ver detalhes
        </a>
      </div>
    `;
  });
}

// Página de detalhes
const detalhes = document.getElementById("detalhes");

if (detalhes) {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const produto = data.produtos.find(p => p.id === id);

  if (produto) {
    detalhes.innerHTML = `
      <h1>${produto.nome}</h1>

      <img src="${produto.imagem}" alt="${produto.nome}" width="300">

      <p><strong>Categoria:</strong> ${produto.categoria}</p>

      <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>

      <p><strong>Descrição:</strong> ${produto.descricao}</p>

      <p><strong>Em estoque:</strong>
      ${produto.emEstoque ? "Sim" : "Não"}
      </p>
    `;
  }
}


  