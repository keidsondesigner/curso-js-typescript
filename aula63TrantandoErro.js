function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e precisam ser números');
    }
    return x + y;
}
try {
    console.log(soma(4, 4));
    console.log(soma(1, '2'));
} catch(error) {
 //   console.log(error);
    console.log('Algo deu errado');
}



