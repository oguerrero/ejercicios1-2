import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB'


const ComponenteA = () => {
    const defaultContact = new Contacto(
        'Oscar',
        'Guerrero',
        'oguerrero@gmail.com',
        false
    )

    return (
        <div>
            <div>
                <h1>Contactos</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar la lista de tareas*/}
            <ComponenteB contact={defaultContact}/>
        </div>
    )
}


export default ComponenteA