import resizeImage from '../../utils/resizeImage';
import fs from 'fs';
import path from 'path';

describe('Image Processing Utility Function', () => {
  const fullImagePath = path.resolve(__dirname, '../../../images/full/fjord.jpg');
  const thumbImagePath = path.resolve(__dirname, '../../../images/thumb/fjord-100-100.jpg');

  it('should resize the image and save it to the thumb folder', async () => {
    // احذف الصورة لو كانت موجودة
    if (fs.existsSync(thumbImagePath)) {
      fs.unlinkSync(thumbImagePath);
    }

    // نفذ الدالة
    await resizeImage('fjord', 100, 100);

    // تأكد أن الصورة صارت موجودة
    const exists = fs.existsSync(thumbImagePath);
    expect(exists).toBeTrue();
  });

  it('should throw an error if the image name is invalid', async () => {
    await expectAsync(resizeImage('xxx', 200, 200)).toBeRejected();
  });
});
