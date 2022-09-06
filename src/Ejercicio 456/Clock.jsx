/* eslint-disable indent */
import React, { useEffect } from 'react'
import '../../styles/clock.scss'

export const ClockHook = () => {
    function tick () {
        this.setState((prevState) => {
            const edad = prevState.edad + 1
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        })
    }
    useEffect(() => {
        this.timerID = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(this.timerID)
        }
    }, [])

    return (
        <div>
            <h2>
                Hora Actual:
                {this.state.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {this.state.nombre} {this.state.apellidos}
            </h3>
            <h1>Edad: {this.state.edad}</h1>
        </div>
    )
}
