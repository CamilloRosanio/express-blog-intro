/***************************************************************
# SETUP DI EXPRESS JS
****************************************************************/

/*
Eseguo gli step scritti sotto solo DOPO:
1)  Aver eseguito "npm init"
2)  Aver creato l'ENTRY POINT "app.js"
3)  Aver aggiunto al PACKAGE.JSON i due SCRIPT (start + dev)

A questo punto:
-   Dichiaro Express come variabile come segue
-   Richiamo la "funzione" Express
-   Dichiaro la PORT tramite cui eseguirò il LISTEN
-   Scrivo la riga che stabilisce dove raccogliere gli STATIC ASSETS (pubblici) e creo una CARTELLA nella DIRECTORY con lo stesso nome
-   Dall'APP (Express) dichiaro la ROUTE (ROTTA) della Home della mia App, e cosa succede quando viene eseguito il GET
-   Dichiaro infine il LISTEN
*/

const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.listen(port, () => {
  console.log(`Listen attivo e in ascolto sulla PORT ${port}`)
})