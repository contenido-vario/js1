function calcular() {
   document.getElementById('p1').innerHTML = '<b>Tu orden de prioridades:</b>';
   document.getElementById('vaca').innerHTML = 'Tu Carrera';
   document.getElementById('tigre').innerHTML = 'El Orgullo';
   document.getElementById('oveja').innerHTML = 'El Amor';
   document.getElementById('caballo').innerHTML = 'La familia';
   document.getElementById('mono').innerHTML = 'El Dinero';

   document.getElementById('p2').innerHTML = '<b>Como ves la vida:</b>';
   document.getElementById('perro').innerHTML = 'Yo Soy...';
   document.getElementById('gato').innerHTML = 'Mi Pareja, ';
   document.getElementById('rata').innerHTML = 'Lo que más odio:';
   document.getElementById('cafe').innerHTML = 'Para mi el sexo es';
   document.getElementById('mar').innerHTML = 'Y la vida...';

   document.getElementById('p3').innerHTML = '<b>Tu gente:</b>';
   document.getElementById('amarillo').innerHTML = 'Nunca te olvidará';
   document.getElementById('naranja').innerHTML = 'Puede ser tu gran amigo/a';
   document.getElementById('blanco').innerHTML = 'Tu Alma Gemela:';
   document.getElementById('rojo').innerHTML = 'Realmente amas a...';
   document.getElementById('verde').innerHTML = 'Siempre estará en tu memoria';
}

function llenar() {
   document.getElementById('vaca-value').value = '4';
   document.getElementById('tigre-value').value = '5';
   document.getElementById('oveja-value').value = '1';
   document.getElementById('caballo-value').value = '2';
   document.getElementById('mono-value').value = '3';

   document.getElementById('perro-value').value = 'Leal';
   document.getElementById('gato-value').value = 'Independiente';
   document.getElementById('rata-value').value = 'Suciedad';
   document.getElementById('cafe-value').value = 'Energizante';
   document.getElementById('mar-value').value = 'Inconmesurable';

   document.getElementById('amarillo-value').value = 'Mis sobrinos';
   document.getElementById('naranja-value').value = 'Eu';
   document.getElementById('blanco-value').value = 'Mi prima';
   document.getElementById('rojo-value').value = 'Mi hija';
   document.getElementById('verde-value').value = 'Mi mamá'

   document.getElementById('llenar').classList.add('hidden') 


}