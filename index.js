const express = require('express');
const app = express();
const port = process.env.PORT;

//endpoint de respuesta
app.get('/', (req, res) => {
  res.send('Integracion continua funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

