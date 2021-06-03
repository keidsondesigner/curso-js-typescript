const hora = 33;

if (hora >= 0 && hora <= 11) {
    console.log("Bom Dia");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa Tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa Noite são ${hora} Horas`);
} else {
    console.log("Erro hora inválida");
}

/* ---------------------------------------------- */

const TenhoGrana = false;

if (TenhoGrana == true) {
    console.log("Vou no shopping");
} else if (TenhoGrana == false) {
    console.log("Vou ficar em casa :(");
}
