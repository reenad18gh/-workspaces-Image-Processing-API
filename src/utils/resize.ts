import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

const resizeImage = async (filename: string, width: number, height: number): Promise<string> => {
  const fullPath = path.resolve('images/full', `${filename}.jpg`)
  const thumbPath = path.resolve('images/thumb', `${filename}-${width}x${height}.jpg`)

  if (fs.existsSync(thumbPath)) return thumbPath

  await sharp(fullPath).resize(width, height).toFile(thumbPath)
  return thumbPath
}

export { resizeImage }
