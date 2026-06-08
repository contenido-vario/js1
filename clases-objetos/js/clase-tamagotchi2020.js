class Tamagotchi20 {
    // Atributos Públicos y Privados
    // Utilizando el prefijo #, JavaScript restringe 
    // el acceso y modificación desde fuera del entorno de la clase.
    // Atributos públicos
    nombre; 
    descripcion;
    avatar;
    arrayImagenes;
    // Atributos privados: Se pueden acceder con funciones internas de la clase
    #felicidad = 0;
    #salud = 0;
    #limpieza = 0;
    #energia = 0;
    #estaVivo = true;

    constructor(nombre, descripcion, avatar, arrayImagenes) {
        this.nombre = nombre;
        this.descripcion = descripcion; 
        this.avatar = avatar;
        this.arrayImagenes = arrayImagenes;
        this.iniciar()
    }

    iniciar() {
        this.#felicidad = Math.ceil(Math.random() * 10);
        this.#salud = Math.ceil(Math.random() * 10);
        this.#limpieza = Math.ceil(Math.random() * 10);
        this.#energia = Math.ceil(Math.random() * 10);
    }

    getSalud() {
        return this.#salud;
    }

    setSalud(valor) {
        if(valor>=0 && valor <=10) {
            this.#salud = valor;
        } else {
            console.warn('La salud de', this.nombre, 'sólo acepta valores entre 0 y 10')
            this.#salud = this.#salud;
        }
        this.comprobarVida();
    }

    cambiaValor(valorActual, incremento) {
        return Math.max(0, Math.min(10, valorActual + incremento));
      // suponiendo que salud vale 6
      // Math.max(0 , Math.min(10, 6+3))
      // cambia el valor de salud a 9
    }

    duchar() {
        this.#limpieza = this.cambiaValor(this.#limpieza, 10);
        this.#salud = this.cambiaValor(this.#salud, 3)
    }

    jugar() {
        this.#felicidad = this.cambiaValor(this.#felicidad, 2) 
        this.#energia = this.cambiaValor(this.#energia, -2) 
        this.#limpieza = this.cambiaValor(this.#limpieza, -2) 
        this.comprobarVida();
    }

    comprobarVida() {
       // se muere si se le acaba la salud o la energia
       if (this.#salud === 0 || this.#energia === 0) this.#estaVivo = false;
    }

    disminuirVida() {
        this.#salud = this.cambiaValor(this.#salud, -1)
        this.#felicidad = this.cambiaValor(this.#felicidad, -1)
        this.#limpieza = this.cambiaValor(this.#limpieza, -1)
        this.#energia = this.cambiaValor(this.#energia, -1)
        this.comprobarVida();
    }

    toString() {
        let datos = `${this.nombre.toUpperCase()}
        ${this.descripcion}
        salud: ${this.#salud}
        energía: ${this.#energia}
        felicidad: ${this.#felicidad}
        limpieza: ${this.#limpieza}`
        return datos;
    }

}

class Accion20 {
    constructor(accion, imagen) {
        this.accion = accion;
        this.imagen = imagen;    
    }
}