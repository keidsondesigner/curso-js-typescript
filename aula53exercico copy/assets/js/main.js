const elementos = [
    {tag: 'h2', texto: 'Formulário de Inscrição'},
    {tag: 'h3', texto: 'Um texto qualquer'},
    {tag: 'button', texto: 'inscreva-se'},
    {tag: 'p', texto: 'esse é um texto referente a um paragrafo'},
    {tag: 'footer', texto: 'Desenvolvido por Keidson Designer'},
]

const getContainer = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

getContainer.appendChild(div)