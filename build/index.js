"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./routes/api/images"));
var imageRequestValidation_1 = __importDefault(require("./middleware/imageRequestValidation"));
var app = express_1.default();
var port = 3000;
app.use('/api/images', imageRequestValidation_1.default, images_1.default);
app.listen(port, function () {
    console.log("listening on port " + port);
});
