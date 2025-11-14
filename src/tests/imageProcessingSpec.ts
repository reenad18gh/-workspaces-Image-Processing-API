import { resizeImage } from '../utilities/imageProcessing';
import path from 'path';
import fs from 'fs';

const fullImagePath = path.resolve('./images/full/fjord.jpg');
const thumbPath = path.resolve('./images/thumb/fjord_200_200.jpg');

describe('Image processing utility function', () => {
  it('should create a resized image successfully', async () => {
    if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
    const result = await resizeImage(fullImagePath, thumbPath, 200, 200);
    expect(result).toBeTruthy();
    expect(fs.existsSync(thumbPath)).toBeTrue();
  });

  it('should throw an error if file does not exist', async () => {
    const invalidPath = path.resolve('./images/full/nonexistent.jpg');
    await expectAsync(
      resizeImage(invalidPath, thumbPath, 200, 200)
    ).toBeRejected();
  });
});
