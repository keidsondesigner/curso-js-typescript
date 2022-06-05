import geradorSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracters = document.querySelector('.qtd-caracters');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha = geradorSenha(
        qtdCaracters.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || "Erro! Selecione uma opção<br> e uma quantidade.";
}
