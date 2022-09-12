import axios from '../../utils/config/axios.config'

export default function getRandomJoke() {
    return axios.get('/')
}
