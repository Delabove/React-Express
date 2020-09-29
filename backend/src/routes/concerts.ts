import { Express } from 'express'
import fetchConcertList from '../helpers/fetchConcertList'

const routeHandler = (app: Express): void => {
    app.get('/', (req, res) => {
      fetchConcertList(req, res)
    })

}

export default routeHandler

    //router for GET request to /concerts.