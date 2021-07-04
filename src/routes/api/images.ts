import express from 'express';
import { promises as fs } from 'fs';

import processImage from '../../utilities/processImage';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  const param = req.query;

  const imagePath = await processImage(
    param.filename as string,
    parseInt(param.height as string),
    parseInt(param.width as string)
  );

  await fs.readFile(imagePath).then((data) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  });
});

export default images;
