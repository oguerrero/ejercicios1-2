import React, { useRef } from 'react'
import { Contacto } from '../../../models/contacto.class'

const ContactoForm = ({ add }) => {
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    const onlineRef = useRef('')

    function addContact(e) {
        e.preventDefault()
        const newContacto = new Contacto(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            onlineRef.current.value
        )
        add(newContacto)
    }

    return (
        <form onSubmit={addContact}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <input
                    ref={nameRef}
                    id='inputName'
                    type='text'
                    placeholder='Name'
                    required
                    autoFocus
                    style={{ padding: '5px', margin: '5px' }}
                />
                <input
                    ref={lastNameRef}
                    id='inputLastname'
                    type='text'
                    placeholder='Last Name'
                    required
                    style={{ padding: '5px', margin: '5px' }}
                />
                <input
                    ref={emailRef}
                    id='inputEmail'
                    type='text'
                    placeholder='Email'
                    required
                    style={{ padding: '5px', margin: '5px' }}
                />
                <label htmlFor='selectLevel'>Online</label>
                <select
                    ref={onlineRef}
                    defaultValue={false}
                    id='selectLevel'
                    style={{ padding: '5px', margin: '5px' }} >
                    <option value={false}>Offline</option>
                    <option value={true}>Online</option>
                </select>
            </div>
            <button type='submit'>Add</button>
        </form>
    )
}

export default ContactoForm
