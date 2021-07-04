import processImage from '../utilities/processImage';

describe('Test image resizing', () => {
  it('should not resolve due to invalid image name ', async function () {
    await expectAsync(processImage('test', 100, 100)).toBeRejected();
  });
  it('should resolve', async function () {
    await expectAsync(processImage('fjord', 100, 100)).toBeResolved();
  });
});

describe('Test endpoint successful reply', () => {
  it('should return correct image location ', async function () {
    expect(await processImage('fjord', 100, 100)).toBe(
      './src/assets/thumb/fjord100100.jpg'
    );
  });
});
