import express from 'express'
import { resizeImage } from '../utils/resize.js'

const routes = express.Router()

routes.get('/', async (req, res) => {
  const filename = req.query.filename as string
  const width = parseInt(req.query.width as string)
  const height = parseInt(req.query.height as string)

  if (!filename || !width || !height) {
    return res.status(400).send('Missing filename, width, or height parameter.')
  }

  try {
    const path = await resizeImage(filename, width, height)
    res.sendFile(path)
  } catch {
    res.status(500).send('Error processing image.')
  }
})

export default routes
