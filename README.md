# image-processer
The image processer will allow you to re-size the images in the assets/full folder via a api request.

## Requirements: 

* npm
* Node js

### Install the project dependencies

```bash
npm install
```

### Running the project
After dependencies are installed you can run the project with nodemon using:

npm run start

or you can build than run the project with:

npm run build

node build/.

### Instructions

After running the project with noemon or by running the build it will be accessible on localhost:3000/api/images

Available images:
* encenadaport
* fjord
* icelandwaterfall
* palmtunnel
* santamonica

Request parameters
* filename
* width (number)
* height (number)

With a selected image name you can make a request with the width and height you desire for the image as per the example below:

http://localhost:3000/api/images?filename=encenadaport&width=500&height=100
