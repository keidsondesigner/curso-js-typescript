const a1 = [1, 2 ,3];
const a2 = [4, 5];

// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');

//concatenando em spread
const a3 = [...a1, ...a2, ...[6, 7, 8]];
console.log(a3);