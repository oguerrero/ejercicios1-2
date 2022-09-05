import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ComponenteB = ({ contact }) => {

    const [estado, setEstado] = useState(contact.conectado)

    const cambiarEstado = () => {
        setEstado(!estado)
    }
    return (
        <div>
            <h2>Nombre: {contact.nombre}</h2>
            <h3>Apellido: {contact.apellido}</h3>
            <h4>Email: {contact.email}</h4>
            <h5>Conectado: {estado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
            <div>
                <button onClick={cambiarEstado}>Cambiar Estado</button>
            </div>
        </div>
    )
}

ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
}

export default ComponenteB
