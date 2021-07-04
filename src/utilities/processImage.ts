import { promises as fs } from 'fs';

const processImage = async (
  filename: string,
  height: number,
  width: number
): Promise<string> => {
  const sharp = await require('sharp');

  const imageName = `${filename}${width}${height}`;
  const imagePath = `./src/assets/thumb/${imageName}.jpg`;

  const files = await fs.readdir('./src/assets/thumb');

  if (files.includes(`${imageName}.jpg`)) {
    const image = await fs.open(imagePath, 'r');
    await image.close();
  } else {
    const fullImage = `./src/assets/full/${filename}.jpg`;

    await sharp(fullImage).resize(width, height).toFile(imagePath);
  }

  return imagePath;
};

export default processImage;
