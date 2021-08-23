const express = require('express');
const app = express();
const IMAGE_FILE = './seikyu.png';

const { createWorker } = require("tesseract.js");
const worker = createWorker({
    logger: m => console.log(m),
});

(async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
        data: { text }
    } = await worker.recognize(IMAGE_FILE);
    console.log(text);
    await worker.terminate();
})();
