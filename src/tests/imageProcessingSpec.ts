import { resizeImage } from '../utilities/imageProcessing';
import fs from 'fs';
import path from 'path';

describe('Image Processing Utility Function', () => {
  const outputPath = path.resolve(__dirname, '../../images/thumb/test-200x200.jpg');

  it('should resize the image and save it to the thumb folder', async () => {
    await resizeImage('test', 200, 200);
    const fileExists = fs.existsSync(outputPath);
    expect(fileExists).toBeTrue();
  });

  afterAll(() => {
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath); // حذف الصورة بعد الاختبار
    }
  });
});
