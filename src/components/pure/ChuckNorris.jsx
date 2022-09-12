import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getRandomJoke from '../services/axiosService'

const ChuckNorris = () => {
    const [chiste, setChiste] = useState(null)
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    useEffect(() => {
        obtainJoke()
    }, [])

    const obtainJoke = async () => {
        getRandomJoke()
            .then((response) => {
                console.log(response.data.value)
                if (response.status === 200) {
                    setChiste(response.data.value)
                }
            })
            .catch((error) => alert(error))
    }

    const updateLikes = () => {
        setLikes(likes + 1)
        obtainJoke()
    }

    const updateDislikes = () => {
        setDislikes(dislikes + 1)
        obtainJoke()
    }

    return (
        <div>
            <h1>Consumir API Chistes de Chuck Norris</h1>
            {chiste != null && <p>{chiste}</p>}
            <div style={{ marginTop: '10px' }}>
                <Button
                    color='success'
                    variant='contained'
                    onClick={obtainJoke}
                    style={{ marginRight: '15px' }}>
                    Nuevo Chiste
                </Button>
                <Button
                    color='info'
                    variant='contained'
                    onClick={updateLikes}
                    style={{ marginRight: '15px' }}>
                    Like {likes}
                </Button>
                <Button
                    color='error'
                    variant='contained'
                    onClick={updateDislikes}>
                    Dislike {dislikes}
                </Button>
            </div>
        </div>
    )
}

export default ChuckNorris
