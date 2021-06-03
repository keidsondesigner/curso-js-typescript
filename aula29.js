const data = new Date()

const diaDaSemana = data.getDay()
let diaDaSemanaTexto

if (diaDaSemana === 0) {
    diaDaSemanaTexto = 'Domingo'
} else if (diaDaSemanaTexto === 1) {
    diaDaSemanaTexto = 'Segunda'
} else if (diaDaSemanaTexto === 2) {
    diaDaSemanaTexto = 'Terça'
} else if (diaDaSemanaTexto === 3) {
    diaDaSemanaTexto = 'Quarta'
} else if (diaDaSemanaTexto === 4) {
    diaDaSemanaTexto = 'Quinta'
} else if (diaDaSemanaTexto === 5) {
    diaDaSemanaTexto = 'Sexta'
} else if (diaDaSemanaTexto === 6) {
    diaDaSemanaTexto = 'SáBado'
} else {
    diaDaSemanaTexto = ''
}


console.log(diaDaSemana, diaDaSemanaTexto)


