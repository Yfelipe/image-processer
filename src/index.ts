import express from 'express';
import images from './routes/api/images';
import imageRequestValidation from './middleware/imageRequestValidation';

const app = express();
const port = 3000;

app.use('/api/images', imageRequestValidation, images);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
