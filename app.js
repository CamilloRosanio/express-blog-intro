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
-   Dall'APP (Express) dichiaro la ROUTE (ROTTA) della Home della mia App, e cosa succede quando viene eseguito il GET
-   Dichiaro infine il LISTEN
*/

const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listen attivo e in ascolto sulla PORT ${port}`)
})