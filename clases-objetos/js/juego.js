// MAPEAMOS HTML
const SELECCIONAR = document.getElementById('seleccionar');

for (let i = 0; i < tamagotchis.length; i++ ) {
    SELECCIONAR.innerHTML += `<option>${tamagotchis[i].nombre}</option>`;
}

console.table(tamagotchis[0]);

tamagotchis[0].duchar();
console.log(tamagotchis[0].nombre, 'se duchó')
console.log(tamagotchis[0].nombre, 'salud', tamagotchis[0].getSalud())
tamagotchis[0].jugar();

console.table(tamagotchis[1]);
tamagotchis[1].duchar();
console.log(tamagotchis[1].nombre, 'salud',tamagotchis[1].getSalud());
tamagotchis[1].setSalud(Math.ceil(Math.random() * 10))
console.log(tamagotchis[1].nombre, 'salud',tamagotchis[1].getSalud());
tamagotchis[1].setSalud(-2)
console.log(tamagotchis[1].nombre, 'salud',tamagotchis[1].getSalud());
tamagotchis[1].jugar();

console.table(tamagotchis);

