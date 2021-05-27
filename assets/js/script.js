const usuariosCadastrados = [
  { nome: "Augusto", senha: "87841" },
  { nome: "Matheus", senha: "86571" },
  { nome: "Marcos", senha: "88470" },
  { nome: "Vitor", senha: "87229" }
]

function validar(nome, senha) {
  let estaCadastrado = false
  for(let i = 0; i < usuariosCadastrados.length; i++) {
    if(estaCadastrado) continue
    if(nome === usuariosCadastrados[i].nome && senha === usuariosCadastrados[i].senha) estaCadastrado = true
  }

  if(estaCadastrado) window.location.href = "./portal.html" 
}

function cadastrar(nome, senha) {
  const todasSenhas = usuariosCadastrados.map(({ senha }) => { return senha })
  if(todasSenhas.includes(senha)) {
    alert(`${nome} já foi cadastrado!`)
    return false
  }

  usuariosCadastrados.push({ nome, senha })
  alert(`${nome} foi inserido!\n Confira os outros usuários cadastrados: ${mostrarTodosNomesCadastrados()}`)
  window.location.href = "./portal.html"
}

function mostrarTodosNomesCadastrados() {
  let todosNomes = ""
  usuariosCadastrados.map(({ nome }) => todosNomes += `${nome}\n`)
  // for(let i = 0; i < usuariosCadastrados.length; i++) {
  //   todosNomes += `${usuariosCadastrados[i].nome}\n`
  // }

  return todosNomes
}

function validarDados(assunto, nome, email, comentario) {
  if(!(assunto && nome && email && comentario)) {
    alert("Por favor verifique os dados enviados.")
  }else {
    alert("Todos campos foram preenchidos!")
    window.location.href = "./portal.html"
  }
}

/*
 * Nome dos integrantes -
 * Augusto Seabra - RM 87841;
 * Matheus Camargo Xavier - RM 86571;
 * Marcos Henrique da Silva - RM 88470;
 * Vitor Machado de Campos - RM 87229.
 */
