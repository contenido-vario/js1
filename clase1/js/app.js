let primerNombre = "Pepito";
let segundoNombre = "Telésforo";
let apellido = "D'Onoffrio"
let edad = 40;
let alergias = false;
let coche = null;
let tit = document.getElementById("titulo").innerHTML;
let costeInternet = Number(document.getElementById("internet").value);
//Todo lo escrito en el documento HTML es un string 

// La consola es para el programador
console.log("La variable primer nombre contiene", primerNombre);
console.log("La variable segundo nombre contiene", segundoNombre);
console.log(primerNombre, segundoNombre, "tiene", edad, "años");
//Template Strings acento obert ``
console.log(`${primerNombre} ${segundoNombre} tiene ${edad} años`);
console.log(`Dentro de 5 años, ${primerNombre} tendrá ${edad + 5} años`);
console.log("costeInternet", costeInternet, typeof(costeInternet));

function internetAnual() {
    console.log(`Al año se paga ${costeInternet * 12} euros`);
}

