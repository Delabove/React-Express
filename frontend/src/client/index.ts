import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string
const client = axios.create({ baseURL: API_URL})

export default client