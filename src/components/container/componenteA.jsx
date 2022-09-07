import React, { useState } from 'react'
import { Contacto } from '../../models/contacto.class'
import ComponenteB from '../pure/componenteB'
import ContactoForm from '../pure/forms/contactoForm'

const ComponenteA = () => {
    const defaultContact1 = new Contacto(
        'Oscar',
        'Guerrero',
        'oguerrero@gmail.com',
        false
    )

    const defaultContact2 = new Contacto(
        'Oscar2',
        'Guerrero',
        'oguerrero@gmail.com',
        true
    )

    const defaultContact3 = new Contacto(
        'Oscar3',
        'Guerrero',
        'oguerrero@gmail.com',
        false
    )

    const defaultContact4 = new Contacto(
        'Oscar4',
        'Guerrero',
        'oguerrero@gmail.com',
        true
    )

    // Estado del componente
    const [contacts, setContacts] = useState([
        defaultContact1,
        defaultContact2,
        defaultContact3,
        defaultContact4
    ])

    function deleteContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.splice(index, 1)
        setContacts(tempContact)
    }

    function addContact(contact) {
        const tempContact = [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }

    function changeOnline(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact[index].conectado = !tempContact[index].conectado

        setContacts(tempContact)
    }

    return (
        <div>
            <div>
                <h1>Contactos</h1>
            </div>
            <ContactoForm add={addContact} />
            <div style={{ display: 'flex' }}>
                {contacts.map((contact, idx) => {
                    return (
                        <ComponenteB
                            key={idx}
                            contact={contact}
                            online={changeOnline}
                            remove={deleteContact}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ComponenteA
