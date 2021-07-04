import express from 'express';
import { promises as fs } from 'fs';

const imageRequestValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  //Check for filename and if image exists in full
  if (!req.query.filename) {
    res.status(400).send('error, no filename sent with request');
    return;
  } else {
    const files = await fs.readdir('./src/assets/full');
    if (!files.includes(`${req.query.filename}.jpg`)) {
      res.status(400).send('error, no image exists with provided filename');
      return;
    }
  }

  //Check for width and if not negative
  if (!req.query.width) {
    res.status(400).send('error, no width sent with request');
    return;
  } else if (
    isNaN(req.query.width as unknown as number) ||
    (req.query.width as unknown as number) <= 0
  ) {
    res.status(400).send('error, width has to be a number and larger than 0');
    return;
  }

  //Check for height and if not negative
  if (!req.query.height) {
    res.status(400).send('error, no height sent with request');
    return;
  } else if (
    isNaN(req.query.height as unknown as number) ||
    (req.query.height as unknown as number) <= 0
  ) {
    res.status(400).send('error, height has to be a number and larger than 0');
    return;
  }

  next();
};

export default imageRequestValidation;
