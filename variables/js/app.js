    // variables de objetos 
    // se define como const para indicar que su contenido no varía.

    // Controles de formulario leo o escribo el atributo value
    const NOMBRE = document.getElementById("nombre"); 
    const APELLIDOS = document.getElementById("apellidos"); 
    const INTERNET = document.getElementById("internet"); 
    const LUZ = document.getElementById("luz"); 
    const AGUA = document.getElementById("agua"); 
    const GAS = document.getElementById("gas"); 
    const ALQUILER = document.getElementById("alquiler");
    // Etiquetas de apertura y cierre leo o escribo el atributo innerHTML
    const TOTAL_GASTOS = document.getElementById("totalGastos"); 
    // const ENUNCIADO = document.getElementById("enunciado"); 

    function rellenar() {
        NOMBRE.value = "Cyrille";
        NOMBRE.title = "Este es tu nombre de pila"        
        APELLIDOS.value = "Nyami";        
        INTERNET.value = "55";        
        LUZ.value = "25";        
        AGUA.value = "30";        
        GAS.value = "45";        
        ALQUILER.value = "450";        
    }

    function calcular() {
        // ENUNCIADO.innerHTML = "Hola"
        let internet = Number(INTERNET.value);
        let luz = Number(LUZ.value);
        let agua = Number(AGUA.value);
        let gas = Number(GAS.value);
        let alquiler = Number(ALQUILER.value);
        let total = internet+luz+agua+gas+alquiler;
        console.log("internet", internet, typeof(internet));
        console.log("luz", luz, typeof(luz));

TOTAL_GASTOS.innerHTML=`<mark>${NOMBRE.value} ${APELLIDOS.value}: Tu gasto fijo total es de ${total} euros.</mark>`
    }
