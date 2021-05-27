/* 
 * Nome dos integrantes:
 * Augusto Seabra - RM 87841;
 * Matheus Camargo Xavier - RM 86571;
 * Marcos Henrique da Silva - RM 88470;
 * Vitor Machado de Campos - RM 87229.
 */

const usuariosCadastrados = [
  { nome: "Augusto", senha: "87841" },
  { nome: "Matheus", senha: "86571" },
  { nome: "Marcos", senha: "88470" },
  { nome: "Vitor", senha: "87229" }
]

function validar(nome, senha) {
  nome = retornaValorFormatado(nome)
  senha = retornaValorFormatado(senha)

  if(verificarValorEstaVazio(nome) || verificarValorEstaVazio(senha)) {
    alert("Preencha corretamente os campos.")
    return false
  }

  let estaCadastrado = false
  for(let i = 0; i < usuariosCadastrados.length; i++) {
    if(estaCadastrado) continue
    if(nome === usuariosCadastrados[i].nome && senha === usuariosCadastrados[i].senha) estaCadastrado = true
  }

  if(estaCadastrado) window.location.href = "./portal.html" 
}

function cadastrar(nome, senha) {
  nome = retornaValorFormatado(nome)
  senha = retornaValorFormatado(senha)
  if(verificarValorEstaVazio(nome) || verificarValorEstaVazio(senha)) {
    alert("Verifique se os campos de nome e senha estão corretamente preenchidos.")
    return false
  }

  const todosNomes = usuariosCadastrados.map(({ nome }) => { return nome })
  if(todosNomes.includes(nome)) {
    alert(`${nome} já foi cadastrado!`)
    return false
  }

  usuariosCadastrados.push({ nome, senha })
  alert(`${nome} foi inserido!\n Confira os outros usuários cadastrados:\n ${mostrarTodosNomesCadastrados()}`)
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
  assunto = retornaValorFormatado(assunto)
  nome = retornaValorFormatado(nome)
  email = retornaValorFormatado(email)
  comentario = retornaValorFormatado(comentario)
  if(verificarValorEstaVazio(assunto) || verificarValorEstaVazio(nome) || verificarValorEstaVazio(email) || verificarValorEstaVazio(comentario)) {
    alert("Por favor verifique os dados enviados.")
  }else {
    alert("Todos campos foram preenchidos!")
    window.location.href = "./portal.html"
  }
}

function retornaValorFormatado(valor){
  return valor.trim("")
}

function verificarValorEstaVazio(valor) {
  return /^\s*$/.test(valor)
}
