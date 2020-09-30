import {Express} from 'express'

import fetchConcerts from '../helpers/fetchConcerts'

const routeHandler = (app: Express): void => {
    app.get('/', (req, res) => {
        fetchConcerts(req, res)

    })
}

export default routeHandler