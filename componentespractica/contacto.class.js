export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    contectado = false

    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado
    }
}