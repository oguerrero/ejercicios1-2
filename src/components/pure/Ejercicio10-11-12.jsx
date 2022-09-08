import React, { useState } from 'react'

const container = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
}

const Ejercicio101112 = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const [manageInterval, setManageInterval] = useState(0)

    const boxStyle = {
        background: `rgb(${red}, ${green}, ${blue})`,
        width: '255px',
        height: '255px',
        transition: 'all 0.1s ease'
    }

    let style = boxStyle

    const changeColor = () => {
        setRed(Math.floor(Math.random() * 256))
        setGreen(Math.floor(Math.random() * 256))
        setBlue(Math.floor(Math.random() * 256))
    }

    const onChangeColor = () => {
        return setManageInterval(setInterval(changeColor, 200))
    }

    const onStopChangeColor = () => {
        return clearInterval(manageInterval)
    }

    const onClickChangeColor = () => {
        return clearInterval(manageInterval)
    }
    return (
        <div style={container}>
            <div
                style={style}
                onMouseOver={onChangeColor}
                onMouseOut={onStopChangeColor}
                onDoubleClick={onClickChangeColor}>
            </div>
        </div>
    )
}

export default Ejercicio101112
