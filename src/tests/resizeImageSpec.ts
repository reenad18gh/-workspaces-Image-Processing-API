import { resizeImage } from '../src/utils/resize.js'
import fs from 'fs'
import path from 'path'

describe('Image Processing Utility', () => {
  const testFile = 'encenadaport'
  const width = 200
  const height = 200
  const outputPath = path.resolve(`images/thumb/${testFile}-${width}x${height}.jpg`)

  it('should create a resized image successfully', async () => {
    const resultPath = await resizeImage(testFile, width, height)
    expect(fs.existsSync(resultPath)).toBeTrue()
  })

  it('should return cached image if it already exists', async () => {
    await resizeImage(testFile, width, height)
    const resultPath = await resizeImage(testFile, width, height)
    expect(resultPath).toEqual(outputPath)
  })
})
