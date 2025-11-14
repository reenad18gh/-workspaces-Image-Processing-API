import { resizeImage } from '../../src/utils/resize';
import fs from 'fs';
import path from 'path';

describe('Image Processing Utility Function', () => {
  const outputPath = path.resolve(__dirname, '../../images/thumb/test.jpg');

  it('should resize the image and save it to the thumb folder', async () => {
    const result = await resizeImage('fjord', 200, 200);
    expect(fs.existsSync(outputPath)).toBeTrue();
    expect(result).toBeTrue();
  });

  afterAll(() => {
    // حذف الصورة بعد الاختبار لتجنب التكرار
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  });
});
