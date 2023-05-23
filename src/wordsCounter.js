const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

const wordsCounter = async () => {
  try {
    const filePath = resolve('./texts/javascript-history.txt');
    const content = await readFile(filePath, {encoding: 'utf-8'});
    const words = content.split(" ");
    const wordsCount = words.length;
    console.log(`Esse texto contém ${wordsCount} palavras.`);
    return wordsCount;
  }
  catch (err) {
    console.log(`Erro ao ler o arquivo!`, err);
    return 0;
  }
};

module.exports = wordsCounter;