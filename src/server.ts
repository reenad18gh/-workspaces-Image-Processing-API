import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import routes from './routes/images.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use('/api/images', routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

export default app
