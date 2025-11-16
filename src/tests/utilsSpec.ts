import { resizeImage } from '../utils/resize';
import fs from 'fs';
import path from 'path';

describe('Image Processing Utility Function', () => {
  const fullImage = path.resolve('images/full/fjord.jpg');
  const thumbImage = path.resolve('images/thumb/fjord-200x200.jpg');

  it('should have a resizeImage function', () => {
    expect(resizeImage).toBeDefined();
  });

  it('should create a resized image in the thumb folder', async () => {
    if (fs.existsSync(thumbImage)) {
      fs.unlinkSync(thumbImage);
    }

    await resizeImage('fjord', 200, 200);

    expect(fs.existsSync(thumbImage)).toBeTrue();
  });
});

