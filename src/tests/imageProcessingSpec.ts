import supertest from 'supertest';
import app from '../../src/server';
import fs from 'fs';
import path from 'path';

const request = supertest(app);

describe('Image Processing Endpoint', () => {
    const thumbPath = path.resolve('images/thumb/fjord-200x200.jpg');

    it('should return 200 for a valid image resize request', async () => {
        const res = await request.get('/api/images?filename=fjord&width=200&height=200');
        expect(res.status).toBe(200);
    });

    it('should create a resized image in the thumb folder', async () => {
        // Delete thumb file first
        if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);

        await request.get('/api/images?filename=fjord&width=200&height=200');

        expect(fs.existsSync(thumbPath)).toBeTrue();
    });

    it('should return 400 for missing parameters', async () => {
        const res = await request.get('/api/images?filename=fjord');
        expect(res.status).toBe(400);
    });

    it('should return 404 if the image does not exist', async () => {
        const res = await request.get('/api/images?filename=notfound&width=200&height=200');
        expect(res.status).toBe(404);
    });
});
