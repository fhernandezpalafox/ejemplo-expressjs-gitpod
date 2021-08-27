const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola alumnos de ISSC 311')
});

app.get('/usuario', (req, res) => {
    res.send('Autenticate')
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})