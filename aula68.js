function falaOi() {
    console.log('Olá');
}

falaOi();


const dados = function () {
    console.log('cpf')
}

dados();


function executarFunct(funcao) {
    funcao();
}

executarFunct(dados);



const funcaoArrow = () => {
    console.log('sou uma arrow')
}

funcaoArrow();


const obj = {
    falar: function () {
        console.log('Falando');
    }
}

obj.falar();