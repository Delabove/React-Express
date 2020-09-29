import express from 'express'
import cors from 'cors'
import routes from './routes/concerts'


const app = express()
app.use(cors())
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

module.exports = app