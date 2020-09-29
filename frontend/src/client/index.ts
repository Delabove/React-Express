import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string
const client = axios.create({ baseURL: 'https://5f70e96b64a3720016e60053.mockapi.io'})

export default client