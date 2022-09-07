import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ComponenteB = ({ contact, remove, online }) => {

    return (
        <div style={{fontSize: '14px', padding: '5px'}}>
            <p>Nombre: {contact.nombre}</p>
            <p>Apellido: {contact.apellido}</p>
            <p>Email: {contact.email}</p>
            <p>Conectado: {contact.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
            <div>
                <button style={{marginRight: '10px'}} onClick={() => online(contact)}>Cambiar Estado</button>
                <button onClick={() => remove(contact)}>Eliminar</button>
            </div>
        </div>
    )
}

ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(Contacto),
    remove: PropTypes.func.isRequired,
    online: PropTypes.func.isRequired
}

export default ComponenteB
