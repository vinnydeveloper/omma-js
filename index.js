const empresa = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

const listaDeReceitas = [
  {
    id: 1,
    titulo: "Cachorro Quente",
    dificuldade: "simples",
    ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
    preparo: "jodbvnujd osbvcujsbn jsbfusb",
    link: "youtube.com",
    vegano: false,
  },
];

const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };
  listaDeReceitas.push(novaReceita);

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

// function cadastrarReceita(
//   id,
//   titulo,
//   dificuldade,
//   ingredientes,
//   preparo,
//   link,
//   vegano
// ) {
//   const novaReceita = {
//     id,
//     titulo,
//     dificuldade,
//     ingredientes,
//     preparo,
//     link,
//     vegano,
//   };

//   listaDeReceitas.push(novaReceita);

//   console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
// }

// console.log(listaDeReceitas[1].ingredientes);

function exibirReceitas() {
  for (let index = 0; index < listaDeReceitas.length; index++) {
    const receita = listaDeReceitas[index];
    console.log("--------------------------------");
    console.log("Titulo = " + receita.titulo);

    for (let index = 0; index < receita.ingredientes.length; index++) {
      const ingrediente = receita.ingredientes[index];
      console.log("ingredientes = " + ingrediente);
    }

    console.log("É vegano? " + receita.vegano);
    console.log("--------------------------------");
  }
}

// exibirReceitas();

function deletarReceita(id) {
  let novaListaDeReceitas = [];

  for (let index = 0; index < listaDeReceitas.length; index++) {
    const receita = listaDeReceitas[index];

    if (receita.id != id) {
      novaListaDeReceitas.push(receita);
    }
  }

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}

// function deletarReceita(id) {
//   const novaListaDeReceitas = listaDeReceitas.filter(
//     (receita) => receita.id != id
//   );

//   if (novaListaDeReceitas.length == listaDeReceitas.length) {
//     return console.log("Não encontrei o id");
//   }

//   listaDeReceitas = novaListaDeReceitas;
//   console.log("receita deletada com sucesso!");
// }

// function deletarReceita(id) {
//   for (let i = 0; i < listaDeReceitas.length; i++) {
//     if (id === listaDeReceitas[i].id) {
//       listaDeReceitas.splice(i, 1);
//       return console.log(`receita ${listaDeReceitas[i].titulo} deletada`);
//     }
//   }

//   console.log("Receita não encontrada");
// }


const atualizaReceita = (id, receitaAtualizada) => {
  let foiAtualizado = false;

  listaDeReceitas.forEach((receita) => {
    if (receita.id != id) {
      return;
    }

    if (receitaAtualizada.titulo) {
      receita.titulo = receitaAtualizada.titulo;
    }

    if (receitaAtualizada.ingredientes) {
      receita.ingredientes = receitaAtualizada.ingredientes;
    }

    foiAtualizado = true;
  });

const buscarReceita = (termoBuscado) => {

  const resultados = listaDeReceitas.filter(
    (receita) =>
      receita.titulo.toLowerCase().indexOf(termoBuscado.toLowerCase()) != -1
  );

  // if (resultados.length) {
  //   console.log(resultados);
  // } else {
  //   console.log("Não foi encontrado receitas");
  // }

  if (!resultados.length) {
    console.log("Não foi encontrado receitas");
  }

  return console.log(resultados);
};


buscarReceita()