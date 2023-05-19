const express = require('express');
const app = express();
const port = 3000;
const wordsCounter = require('./wordsCounter');

app.get('/', async (req, res) => {
  const wordsCount = await wordsCounter();
  res.send(`Número de palavras são: ${wordsCount} palavras.`);
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});