export const getErrorMessage = errorType => ({
  'unsupported-code': 'Não oferecermos suporte ao código de moeda fornecido',
  'malformed-request': 'Seu pedido não segue a estrutura mostrada',
  'invalid-key': 'Chave de API do criador não é válida',
  'inactive-account': 'Endereço de e-mail do criador do app não foi confirmado',
  'quota-reached': 'Foi atingido o numero de Requisições para o plano do criador'
})[errorType] || 'Houve um erro inesperado iremos trabalhar para resolver volte mais tarde'

export function createErrorMessage(messageError) {
  const errorSpace = document.getElementById('error-mess')
  const div = document.createElement('div')
  div.className = 'alert-error'
  div.innerHTML = `<p>${messageError}</p>`
  const btnDeleteMessage = document.createElement('button')
  btnDeleteMessage.className = 'btn-delete-mess'
  btnDeleteMessage.innerText = 'X'
  errorSpace.append(div, btnDeleteMessage)
  deleteMessageError()
}

function deleteMessageError() {
  const alertError = document.querySelector('.alert-error')
  const xBtn = document.querySelector('.btn-delete-mess')
  xBtn.addEventListener('click', (e) => {
    e.preventDefault()
    alertError.remove()
    xBtn.remove()
  })
}
