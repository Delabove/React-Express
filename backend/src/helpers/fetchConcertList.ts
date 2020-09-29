import { Request, Response } from 'express'

import concerts from '../../dummy-data/concerts.json'

const fetchConcertList = (req: Request, res: Response): void => {
  console.log('request', req.path)
  res.json(concerts)
}

export default fetchConcertList