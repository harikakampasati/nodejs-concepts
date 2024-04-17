const fs = require('fs');

// Function to generate random text data
function generateRandomText() {
    const characters = 'this is large file to read data';
    const length = Math.floor(Math.random() * 100) + 1; // Random length between 1 to 100 characters
    let text = '';
    for (let i = 0; i < length; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
}

// Function to generate data file with specified number of lines
function generateDataFile(numLines, filename) {
    const stream = fs.createWriteStream(filename);
    for (let i = 0; i < numLines; i++) {
        const text = generateRandomText();
        stream.write(`${text}\n`);
    }
    stream.end();
}

const numLines = 1000000; // Number of lines for 1 million
const filename = 'data.txt';

generateDataFile(numLines, filename);
console.log(`Data file "${filename}" with ${numLines} lines generated successfully.`);
