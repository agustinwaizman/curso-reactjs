import React from 'react';
import ContactoComponent from './contacto';
import { Contacto } from './contacto.class';

const Listacontactos = () => {
    const defaultContact = new Contacto("Agustin", "Waizman", "aguswaizman98@gmail.com", true);
    const cambiarEstado = () => {
        this.setState((prevState) => (
            {contectado : !prevState}
        ))
    }
    return (
        <div>
            <h1>
                Tus contactos: 
            </h1>
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
            <button onClick={cambiarEstado(this)}>CAMBIAR ESTADO</button>
        </div>
    );
}

export default Listacontactos;
